import Footer from "@/components/Dashboard/Footer";
import Navbar from "@/components/Dashboard/Navbar";
import Projects from "@/components/Dashboard/Projects";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" strategy="afterInteractive" />
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}
