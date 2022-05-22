import React, { useState } from 'react';
import './MessageSender.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// icons
import { Avatar } from '@material-ui/core'
import { Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons'
import { Send } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

// context api
import { useStateValue } from '../../../state/Provider'

//Firebase
import { db } from '../../../firebase'
import { collection, addDoc, Timestamp} from 'firebase/firestore'

//Imagenes
import imgFeliz from '../../../img/Sentimientos/MFeliz.png'
import imgLlorando from '../../../img/Sentimientos/Mllorando.png'
import imgNeutral from '../../../img/Sentimientos/MNeutral.png'
import imgTriste from '../../../img/Sentimientos/Mtriste.png'
import imganimada from '../../../img/nyan-cat.gif'

// database
//import db from '../../../firebase'

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const MySwal = withReactContent(Swal);

    const arrReacciones = [ {
            nombre: 'Feliz',
            img: imgFeliz,
            valor:1
        },
        {
            nombre: 'Bien',
            img: imgNeutral,
            valor:2
        },
        {
            nombre: 'Triste',
            img: imgTriste,
            valor:3
        },
        {
            nombre: 'Llorando',
            img: imgLlorando,
            valor:4
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            if (!input){
                alert("Debes ingresar un mensaje.")
                return;
            }
            
            await addDoc(collection(db,'Mensajes'), {
                Fecha: Timestamp.now(),
                Msj: input,
                Usuario: user.displayName,
                Leido: false
            })
            // clear form
            setInput('');
            setImageUrl('');

            await MySwal.fire({
                title: <strong>Exito</strong>,
                html: <i>Mensaje enviado con exito!</i>,
                icon: 'success'
            })
        }
        catch (err) {
            await MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
                footer: 'Meeow'
              })
        }
    }

    const handleAnimo = async (e) => {
        
        try{
            await addDoc(collection(db,'Estados_Animo'), {
                Fecha: Timestamp.now(),
                Reaccion: e,
                Usuario: user.displayName
            })

            await MySwal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Meeow',
                showConfirmButton: false,
                timer: 1500
            })
        }
        catch (err) {
            await MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
                footer: 'Meeow'
              })
        }
    }

    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        className="messageSenderInput" 
                        placeholder={`¿Cuentanos algo hoy, ${user.displayName}?`} 
                    />
                    <Button endIcon={<Send />} color="primary" onClick={handleSubmit}>Enviar</Button>
                </form>
            </div>

            {/* Reacciones */}
            <div className="messageSenderBottom">
                {arrReacciones.map((reaccion) => (
                    <div className="messageSenderOption" onClick={()=> handleAnimo(reaccion.valor)} >
                        <div className='reacciones'>
                            <img src= {reaccion.img} 
                            alt={reaccion.nombre}/>
                        </div>
                        <h3>{reaccion.nombre}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MessageSender;
