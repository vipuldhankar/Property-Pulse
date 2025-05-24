import Navbar from '@/components/Navbar';
import "@/assets/styles/globals.css";
import Footer from '@/components/Footer';
export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};
const Mainlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default Mainlayout;
