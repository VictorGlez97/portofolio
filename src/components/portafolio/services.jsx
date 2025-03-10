
import { Card } from "primereact/card"

const Services = () => {

    return (
        <>
           <section id="servicios">
                <h2 className="text-2xl text-center title">Servicios que ofrezco</h2>

                <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-content-center p-4 gap-2">
                    <Card className="col-12 md:col-4 lg:col-4">
                        {/* <img src="icono-web.png" alt="Desarrollo Web"> --> */}
                        <div className="flex justify-content-center">
                            <i className="pi pi-code" style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div className="text-center">
                            <h3>Desarrollo Web</h3>
                            <p>Creación de sitios web responsivos y funcionales con tecnologías como HTML, CSS, JavaScript y frameworks modernos.</p>
                        </div>
                    </Card>
                
                    <Card className="col-12 md:col-4 lg:col-4">
                        {/* <img src="icono-app.png" alt="Desarrollo de Aplicaciones"> --> */}
                        <div className="flex justify-content-center">
                            <i className="pi pi-desktop" style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div className="text-center">
                            <h3>Desarrollo de Aplicaciones de Escritorio</h3>
                            <p>Aplicaciones personalizadas para mejorar los procesos internos de tu negocio, utilizando tecnologías como C#, Java y Python.</p>
                        </div>
                    </Card>
                
                    <Card className="col-12 md:col-4 lg:col-4">
                        {/* <img src="icono-soporte.png" alt="Mantenimiento y Soporte"> --> */}
                        <div className="flex justify-content-center">
                            <i className="pi pi-wrench" style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div className="text-center">
                            <h3>Mantenimiento y Soporte</h3>
                            <p>Servicio continuo para asegurar que tu sitio web o aplicación se mantenga actualizado y sin problemas técnicos.</p>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}

export default Services