
function Contact() {

    return (
        <>
            <section id="contacto">
                <h2> Contacto </h2>
                <form action="/enviar" method="POST">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />

                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>

                    <button type="submit">Enviar</button>
                </form>
                <div class="informacion">
                    <p>Email: contacto@tucorreo.com</p>
                    <p>Redes Sociales: [Enlace a redes sociales]</p>
                </div>
            </section>
        </>
    )
}

export default Contact