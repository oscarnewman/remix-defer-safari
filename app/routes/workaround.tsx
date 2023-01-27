import { commonLoader, ShowDeferredData } from "~/data";

export const loader = commonLoader;

export default function Index() {
  return (
    <div>
      <p aria-hidden="true" style={{ position: 'absolute', top: -50, left: '-100%'  }}>{"a".repeat(1024)}</p>
      <h1>Workaround using off-screen (but still rendered) text</h1>
      <ShowDeferredData />
    </div>
  );
}
