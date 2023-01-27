import type { LoaderArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { useLoaderData, Await } from "@remix-run/react";
import { Suspense } from "react";

export async function fastData() {
  return { hello: "fast data" };
}

export async function slowData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { hello: "slow data" };
}

export async function commonLoader({ request }: LoaderArgs) {
  return defer({
    fastData: fastData(),
    slowData: slowData(),
  });
}

export function ShowDeferredData() {
  const { fastData, slowData } = useLoaderData() as any;

  return (
    <>
      <h1>Fast Data</h1>
      <Suspense fallback={"Loading fast data..."}>
        <Await resolve={fastData}>
          {(data) => <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Await>
      </Suspense>
      <h1>Slow Data</h1>
      <Suspense fallback={"Loading slow data..."}>
        <Await resolve={slowData}>
          {(data) => <pre>{JSON.stringify(data, null, 2)}</pre>}
        </Await>
      </Suspense>
    </>
  );
}
