import React, { useState, useEffect } from 'react';
import './Feed.css';

// components
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

// image
import arif from '../../img/story/arif.jpg'
import postImage from '../../img/story/storyImage/web-development.jpg'

// database
import { db } from '../../firebase'
import { collection, getDocs, query, orderBy, onSnapshot, where} from 'firebase/firestore'

const Feed = () => {
    const [posts, setPosts] = useState([]);
    
    const publicaciones = collection(db,"Publicaciones");
    const reacciones = collection(db,"Reacciones");

    const getPublicaciones = async () => {
        
        const data = await getDocs(publicaciones)
        setPosts(
            data.docs.map((doc) => ({...doc.data(), id:doc.id}))
        )
    }

    const validaReaccion = async (id) => {
        const q = query(reacciones, where("IdPublicacion", "==", id));
        const estado = false;
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            estado = true;
        });

        return estado;
    }

    useEffect(async () => {
        //getPublicaciones()

        const q = query(collection(db, 'Publicaciones'), orderBy('Fecha_Vence', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map(doc => ({
                ...doc.data(), id:doc.id
            })))
        })
    }, [])

    return (
        <div className="feed">
            
            <MessageSender />
        
            {
                posts.map(post => (
                    <Post 
                        key={post.id}
                        profilePic={arif}
                        message={post.Descripcion}
                        timestamp={post.Fecha_Vence}
                        username={post.Nombre}
                        image={post.imagen}
                        IdPost={post.id}
                        Like={validaReaccion(post.id)}
                    />
                ))
            }
            {/*<Post 
                key='1'
                profilePic={arif}
                message='Material Design Icons growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project'
                username='devarif'
                image={postImage}
            />
            <Post 
                key='2'
                profilePic={arif}
                message='WOW this works!'
                username='devarif'
            />*/}
        </div>
    )
}

export default Feed;