import "./globals.css";

export const metadata = {
  title: "Huddle landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
