
import { HeroSection } from "./herosection";
import TrustedBySection from "./trustedbysection";
import ProductShowcase from "./productshowcase";
import PremiumLeatherSection from "./premiumleather";
import { LimitedTimeOffer } from "./limitedtimeoffer";
import LeatherCollectionsSection from "./leathercollectionsection";
export function Homepage() {
  return (
     <main> 
      <HeroSection />
      <TrustedBySection/>
      <ProductShowcase />
      <PremiumLeatherSection/>
      <LimitedTimeOffer />
      <LeatherCollectionsSection/>
    </main>
  );
}