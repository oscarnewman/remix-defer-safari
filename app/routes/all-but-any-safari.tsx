import { commonLoader, ShowDeferredData } from "~/data";

export const loader = commonLoader;

export default function Index() {
  return (
    <div>
      <ShowDeferredData />
    </div>
  );
}
