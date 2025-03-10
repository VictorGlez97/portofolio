import { useState } from 'react'

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'

import { useForm } from '../../hooks/useForm'

const Contact = () => {

    const [ Values, handleInputChange, Reset ] = useForm({ name: '', message: '', mail: '' })

    return (
        <>
            <section id="contacto">
                <h2 className="text-2xl text-center font-bold">Contacto</h2>
                <div className='flex justify-content-center'>

                    <Card className='col-6 p-fluid'>
                        
                        <div className="col-12 mb-4" style={{ marginTop: '-1rem' }}>
                            <label> Nombre </label>
                            <InputText 
                                value={Values.name} 
                                onChange={(e) => handleInputChange(e.target.value, "name")} 
                            />
                        </div>

                        <div className="col-12 mb-4" style={{ marginTop: '-1rem' }}>
                            <label> Correo / telefono: </label>
                            <InputText 
                                value={Values.mail} 
                                onChange={(e) => handleInputChange(e.target.value, "mail")} 
                            />
                        </div>

                        <div className="col-12" style={{ marginTop: '-1rem' }}>
                            <label> Mensaje: </label>
                            <InputTextarea 
                                value={Values.message} 
                                onChange={(e) => handleInputChange(e.target.value, "message")} 
                            />
                        </div>

                        <div className='col-12'>
                            <Button 
                                label='Enviar'
                                size='small'
                                style={{ backgroundColor: 'var(--primary-color)' }}
                            />
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}

export default Contact