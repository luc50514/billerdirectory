import RootStyleRegistry from "./emotion";

export default function RootLayout({ children }) {
  return (
    <html>
    <head></head>
    <body>
    <RootStyleRegistry>{children}</RootStyleRegistry>
    </body>
    </html>
  );
}
