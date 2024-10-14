import CartItems from "@/components/Home/CartItems/CartItems";
import Counter from "@/components/Home/Counter/Counter";
import Footer from "@/components/Home/Footer/Footer";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Navber from "@/components/Home/navigation/Navber";
import OurClient from "@/components/Home/OurClient/OurClient";
import SliderText from "@/components/Home/SliderText/SliderText";
import Whatwedo from "@/components/Home/WhatWeDo/Whatwedo";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";


export default function Home() {
  return (
    <div>
      <Navber />
      <HeroSection />
      <CartItems />
      <WhatWeDo />
      <hr className="border-red-500" />
     <SliderText />
     <OurClient />
     <Whatwedo/>
     <Counter/>
     <Footer/>
    </div>
  );
}
