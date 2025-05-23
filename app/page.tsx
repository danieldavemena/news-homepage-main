import LandingPage from "@/app/pages/landingpage/page";
import MobileNav from "./components/mobilenav";

export default function Home() {
  return (
    <main>
      <MobileNav />
      <div className="md:hidden fixed h-screen w-screen z-5 bg-[#00000097]"></div>
      <LandingPage />
    </main>
  );
}
