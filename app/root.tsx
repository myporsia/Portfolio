import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const meta = () => {
  return [
    { title: "Porsia - Create Your Portfolio with AI Power" },
    { name: "description", content: "Create your portfolio with AI power" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script async src="//embed.typeform.com/next/embed.js"></script>
      </body>
    </html>
  );
}
