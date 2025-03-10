import { Card } from "primereact/card"

const Projects = () => {

    return (
        <>
            <section id="portafolio">
                <h2 className="text-2xl text-center font-bold">Mis Proyectos</h2>
                <div className="flex md:flex-nowrap sm:flex-wrap justify-content-center p-4 gap-2">
                    
                    <Card className="md:col-4 sm:col-12">
                        {/* <img src="proyecto1.jpg" alt="Proyecto 1"> --> */}
                        <div className="flex justify-content-center">
                            <i className="pi pi-sparkles" style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div className="flex flex-column justify-content-center">
                            <h3 className="text-center"> Noemichi´s bakery </h3>
                            <p className="text-center">Descripción breve del proyecto.</p>
                        </div>
                    </Card>
                    
                    <Card className="md:col-4 sm:col-12">
                        {/* <img src="proyecto1.jpg" alt="Proyecto 1"> --> */}
                        <div className="flex justify-content-center">
                            <i className="pi pi-bitcoin" style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div className="flex flex-column justify-content-center">
                            <h3 className="text-center"> Trade schedule </h3>
                            <p className="text-center">Descripción breve del proyecto.</p>
                        </div>
                    </Card>
                    
                </div>
            </section>
        </>
    )
}

export default Projects