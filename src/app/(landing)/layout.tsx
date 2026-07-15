import { Navbar1 } from "@/components/layout/navbar1";
import FooterSection from "@/components/layout/section/footer-section";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     
      <Navbar1/>
      {children}
      <FooterSection/>


      
    </>
  );
}