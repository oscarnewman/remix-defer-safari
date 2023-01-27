import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { commonLoader, ShowDeferredData } from "~/data";

export const loader = commonLoader;

export default function Index() {
  return (
    <div>
      <h1>Works everywhere (including safari)</h1>
      <p>*********************************************************</p>
      <ShowDeferredData />
    </div>
  );
}
