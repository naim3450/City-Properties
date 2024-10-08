
import AboutUs from '../Component/AboutUs'
import Navber from '../Component/Navber'
import Hero from '../Component/Hero'
import Footer from '../Component/Footer'
import SlidePart from '../Component/SlidePart'

const Home = () => {
    return (
        <div>
            <Navber />
            <Hero />
            <SlidePart />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Home