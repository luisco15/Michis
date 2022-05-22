import React, { useState } from 'react';
import './Post.css'

// Icons
import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined } from '@material-ui/icons';

// context api
import { useStateValue } from '../../../state/Provider'

//Firebase
import { db } from '../../../firebase'
import { collection, addDoc, Timestamp, getDocs, getDoc, doc, query, where} from 'firebase/firestore'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Post = ({ profilePic, image, username, timestamp, message, IdPost, Like }) => {

    const MySwal = withReactContent(Swal);
    const [{ user }, dispatch] = useStateValue();
    const [ColorReaccion, setColor] = useState('postOption');

    const handleReaccion = async (e) => {
        e.preventDefault();

        try{ 
            if (ColorReaccion == 'postOptionLike') {
                setColor('postOption')
            }else{
                setColor('postOptionLike')
                await addDoc(collection(db,'Reacciones'), {
                    Fecha: Timestamp.now(),
                    IdPublicacion: IdPost,
                    Usuario: user.displayName
                })
            }
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
        <div className="post">
            <div className="postTop">
                <Avatar src={profilePic} className="postAvatar" />

                <div className="postTopInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="postBottom">
                <div className="postOptions">
                    {message.length > 0 && 
                        <div className="postOption">
                            <div ></div>
                            <p>{message}</p>
                        </div>
                    }
                    <div className="postOption">
                        <div className="postImage">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="postOptions">
                
                <div className={ColorReaccion} onClick={handleReaccion}>
                    <ThumbUp />
                    <p>Me gusta</p>
                </div>
            </div>
        </div>
    )
}

export default Post;
