import { 
  HeroSection,
  TrustedBySection,
  ProductShowCase,
  LimitedTimeOffer,
  LeatherCollectionSection,
  PremiumLeather
} from "../components/individuals/homepage"
import Footer from "../components/common/Footer"

const HomePage = () => {
    return (
        <section>
            <HeroSection />
            <TrustedBySection/>
            <ProductShowCase/>
            <LeatherCollectionSection/>
            <PremiumLeather/>
            <LimitedTimeOffer/>
            <Footer/>
        </section>
    )
}

export default HomePage