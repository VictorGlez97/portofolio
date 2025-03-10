import { useNavigate } from "react-router-dom"

import { Menubar } from 'primereact/menubar'

const Navbar = ({ scroll }) => {

    // const navigate = useNavigate();

    const navList = [
        { label: 'Portafolio', icon: 'pi pi-briefcase', command: () => { scroll('portafolio'); } },
        { label: 'Servicios', icon: 'pi pi-desktop', command: () => { scroll('servicios'); } },
        { label: 'Sobre mí', icon: 'pi pi-id-card', command: () => { scroll('sobre mi'); } },
        { label: 'Contacto', icon: 'pi pi-envelope', command: () => { scroll('contacto'); } },
    ]

    return (
        <>
            <header>
                <div className="flex justify-content-center mt-4">
                    <Menubar 
                        className='w-11'
                        model={navList}
                    />
                </div>
            </header>
        </>
    )
}

export default Navbar