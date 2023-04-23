import "./globals.css";
import Navbar from "../components/Navbar";

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
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
