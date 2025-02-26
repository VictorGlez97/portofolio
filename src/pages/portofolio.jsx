import Contact from "../components/portafolio/contact"
import Footer from "../components/portafolio/footer"
import Inicio from "../components/portafolio/inicio"
import Navbar from "../components/portafolio/navbar"
import Projects from "../components/portafolio/projects"
import Services from "../components/portafolio/services"

function Portofolio() {

    return (
        <>
            <Navbar />
            <Inicio />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Portofolio