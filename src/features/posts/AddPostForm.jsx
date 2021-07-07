import React, {useState} from 'react'
import { postAdded } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const AddPostForm = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const dispatch = useDispatch()
    const [userId, setUserId]=useState("");

    const users=useSelector((state)=>state.users)

    const userOptions=users.map((user)=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    const savePost=()=>{
        if(title && content){ //eğer title content boş değil ise
            dispatch(
                postAdded(title, content, userId)
            );
            setTitle("");
            setContent("");
            setUserId("");
        }
    }
    const canSave =Boolean(title) && Boolean(content) && Boolean(userId) // bu üç alanda dolu ise canSave true olur ve button aktif halde olur, üç alanda doldurulmayana kadar button aktif hale gelmez  
    return (
       <section>
           <h2>Add a New Post</h2>
           <form>
               <label htmlFor="postTitle">Post Title:</label>
               <input 
               type="text"
               id="postTitle"
               name="postTitle"
               value={title}
               onChange={(e)=>setTitle(e.target.value)}
               />
               <label htmlFor="postAuthor">Author:</label>
               <select id="postAuthor" value={userId} onChange={e=>setUserId(e.target.value)}>
                   <option value=""></option>
                   {userOptions}
               </select>
               <label htmlFor="postContent">Content:</label>
               <textarea
               id="postContent"
               name="postContent"
               value={content}
               onChange={(e)=>setContent(e.target.value)}
               />
               <button type="button" onClick={savePost} disabled={!canSave}>Save Post</button>
           </form>
       </section>
    )
}

