import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link to="/">Works on all browsers</Link>
            </li>
            <li>
              <Link to="/all-but-safari">Broken on safari</Link>
            </li>
            <li>
              <Link to="/workaround">Sketchy workaround</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
