import { Card } from "primereact/card"

const Projects = () => {

    return (
        <>
            <section id="portafolio">
                <h2 className="text-2xl text-center font-bold">Mis Proyectos</h2>
                <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-content-center p-4 gap-2">
                    
                    <Card className="col-12 md:col-4 lg:col-4">
                        {/* <img src="proyecto1.jpg" alt="Proyecto 1"> --> */}
                        <div className="flex justify-content-center">
                            <i className="pi pi-sparkles" style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div>
                            <h3 className="text-center"> Noemichi´s bakery </h3>
                            <p className="text-center">Descripción breve del proyecto.</p>
                        </div>
                    </Card>
                    
                    <Card className="col-12 md:col-4 lg:col-4">
                        {/* <img src="proyecto1.jpg" alt="Proyecto 1"> --> */}
                        <div className="flex justify-content-center">
                            <i className="pi pi-bitcoin" style={{ fontSize: '2.5rem', color: 'var(--primary-color' }} />
                        </div>
                        <div>
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