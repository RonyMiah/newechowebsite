import CartItems from "@/components/Home/CartItems/CartItems";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Navber from "@/components/Home/navigation/Navber";


export default function Home() {
  return (
    <div >
     <Navber/>
     <HeroSection/>
     <CartItems/>
    </div>
  );
}
