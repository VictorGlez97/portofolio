
const Footer = () => {

    return (
        <>
            <footer className="mt-4">
                <p className="text-center">&copy; 2025 VHGA. Todos los derechos reservados.</p>
                <div className="flex justify-content-center gap-4">
                    <a className="flex flex-column" style={{ cursor: 'pointer' }}>
                        <i className="pi pi-facebook text-center" style={{ fontSize: '1.5rem' }} />
                        <span className="text-center"> vhga </span>
                    </a>

                    <a className="flex flex-column" style={{ cursor: 'pointer' }}>
                        <i className="pi pi-instagram text-center" style={{ fontSize: '1.5rem' }} />
                        <span className="text-center"> vhga </span>
                    </a>

                    <a className="flex flex-column" style={{ cursor: 'pointer' }}>
                        <i className="pi pi-twitter text-center" style={{ fontSize: '1.5rem' }} />
                        <span className="text-center"> vhga </span>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer