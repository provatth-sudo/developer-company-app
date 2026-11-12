export const metadata = {
  title: "NHM BUILDERS",
  description: "Building Management System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
  }
