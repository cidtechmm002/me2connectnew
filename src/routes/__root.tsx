import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Media Wave · Dubai-Myanmar VIP Membership" },
      { name: "description", content: "An exclusive VIP membership network connecting Myanmar's elite entrepreneurs with Dubai's circles of luxury, business and prestige." },
      { name: "author", content: "Media Wave" },
      { property: "og:title", content: "Media Wave · Dubai-Myanmar VIP Membership" },
      { property: "og:description", content: "An exclusive VIP membership network connecting Myanmar's elite entrepreneurs with Dubai's circles of luxury, business and prestige." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Media Wave · Dubai-Myanmar VIP Membership" },
      { name: "twitter:description", content: "An exclusive VIP membership network connecting Myanmar's elite entrepreneurs with Dubai's circles of luxury, business and prestige." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2ddb7268-3719-4331-84e3-e9dfe31fe106/id-preview-5aba728d--ee619a86-3813-4c4d-acf8-1a30b4202968.lovable.app-1776833426963.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2ddb7268-3719-4331-84e3-e9dfe31fe106/id-preview-5aba728d--ee619a86-3813-4c4d-acf8-1a30b4202968.lovable.app-1776833426963.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
