import RootStyleRegistry from "./emotion";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Biller Directory</title>
      </head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
