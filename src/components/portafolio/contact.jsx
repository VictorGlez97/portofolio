import { useRef } from 'react'

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from 'primereact/toast'

import { useForm } from '../../hooks/useForm'
import api from '../../services/api'

const Contact = () => {

    const toast = useRef(null);

    const [ Values, handleInputChange, Reset ] = useForm({ name: '', message: '', mail: '', phone: '' })

    const handleSubmit = async () => {

        console.log( Values );

        const response = await api.post('portofolio/contact', Values);

        if ( response.data.error ) {
            toast.current.show({severity: 'Warn', summary: 'Advertencia', detail: response.data.msg, life: 3000});
            return;
        }

        toast.current.show({severity: 'Info', summary: 'Info', detail: response.data.msg, life: 3000});
    }

    return (
        <>
            <Toast ref={toast} />
            <section id="contacto">
                <h2 className="text-2xl text-center font-bold">Contacto</h2>
                <div className='flex justify-content-center pl-4 pr-4'>

                    <Card className='col-12 md:col-6 md:col-6 p-fluid customCard'>
                        
                        <div className="col-12 mb-4" style={{ marginTop: '-1rem' }}>
                            <label> Nombre </label>
                            <InputText 
                                value={Values.name} 
                                onChange={(e) => handleInputChange(e.target.value, "name")}
                                className='customInput' 
                            />
                        </div>

                        <div className="col-12 mb-4" style={{ marginTop: '-1rem' }}>
                            <label> Correo </label>
                            <InputText 
                                value={Values.mail} 
                                onChange={(e) => handleInputChange(e.target.value, "mail")} 
                                className='customInput'
                            />
                        </div>

                        <div className="col-12 mb-4" style={{ marginTop: '-1rem' }}>
                            <label> Teléfono </label>
                            <InputText 
                                value={Values.phone} 
                                onChange={(e) => handleInputChange(e.target.value, "phone")} 
                                className='customInput'
                            />
                        </div>

                        <div className="col-12" style={{ marginTop: '-1rem' }}>
                            <label> Mensaje </label>
                            <InputTextarea 
                                value={Values.message} 
                                onChange={(e) => handleInputChange(e.target.value, "message")} 
                                className='customInput'
                            />
                        </div>

                        <div className='col-12'>
                            <Button 
                                label='Enviar'
                                size='small'
                                // style={{ backgroundColor: 'var(--primary-color)' }}
                                onClick={ handleSubmit }
                                severity='info'
                            />
                        </div>
                    </Card>
                </div>
            </section>
        </>
    )
}

export default Contact