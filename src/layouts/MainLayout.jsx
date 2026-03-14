import Footer from "../assets/components/Footer";
import Navbar from ".../assets/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-sky-100 to-blue-100">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}