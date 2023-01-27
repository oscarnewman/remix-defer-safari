import { commonLoader, ShowDeferredData } from "~/data";

export const loader = commonLoader;

export default function Index() {
  return (
    <div>
      <h1>Broken on Safari</h1>
      <p>****************************************</p>
      <ShowDeferredData />
    </div>
  );
}
