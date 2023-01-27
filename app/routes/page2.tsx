import { Link } from "@remix-run/react";

export default function page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <p>
        Another page just so you can click-back and do a client-side transition
        too.
      </p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
