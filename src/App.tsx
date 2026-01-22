import BtnUp from "./components/BtnUp"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./partials/About"
import Destination from "./partials/Destination"
import Hero from "./partials/Hero"
import Popular from "./partials/Popular"
import Testimonials from "./partials/Testimonials"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Destination />
      <About />
      <Popular />
      <Testimonials />
      <Footer />
      <BtnUp />
    </>
  )
}

export default App