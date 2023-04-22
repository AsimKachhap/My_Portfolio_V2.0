import "./globals.css";

export const metadata = {
  title: "Asim Kachhap",
  description: "Asim is a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
