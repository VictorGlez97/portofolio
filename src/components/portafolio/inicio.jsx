import { Button } from "primereact/button"

const Inicio = ({ scroll }) => {

    return (
        <>
            <section className="flex justify-content-center p-6 md:p-4 lg:p-4">
                <div class="introduccion">
                    <h1 className="text-3xl">Hola, soy VHGA</h1>
                    <p className="text-xl sm:text-justify">Desarrollador web y de aplicaciones de escritorio con experiencia creando soluciones personalizadas para negocios y emprendedores.</p>
                    <div className="flex justify-content-end">
                        <Button label="Solicita una consulta" severity="info" onClick={ scroll('contacto') } text />
                        {/* style={{ color: '#85b2f9' }} */}
                    </div>
                </div>
                <div class="imagen">
                    {/* <img src="foto-perfil.jpg" alt="Tu nombre o imagen"> */}
                </div>
            </section>
        </>
    )
}

export default Inicio