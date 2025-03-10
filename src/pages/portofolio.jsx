import Contact from "../components/portafolio/contact"
import Footer from "../components/portafolio/footer"
import Inicio from "../components/portafolio/inicio"
import Navbar from "../components/portafolio/navbar"
import Projects from "../components/portafolio/projects"
import Services from "../components/portafolio/services"

const Portofolio = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <Navbar scroll={scrollToSection} />
            <Inicio />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Portofolio