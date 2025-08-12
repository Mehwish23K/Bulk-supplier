import { 
  HeroSection,
  TrustedBySection,
  ProductShowCase,
  LimitedTimeOffer,
  LeatherCollectionSection,
  PremiumLeather,

} from "../components/individuals/homepage"
import WhyChooseUs from "../components/individuals/homepage/WhyChooseUs"
import Testimonial from "../components/individuals/homepage/Testimonial"
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
            <WhyChooseUs/>
            <Testimonial/>
            <Footer/>
        </section>
    )
}

export default HomePage