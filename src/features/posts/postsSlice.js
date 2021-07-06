import {createSlice} from "@reduxjs/toolkit";

const initialState =[
    {id:"1", title:"First Post!", content:"Hello!"},
    {id:"2", title:"Second Post!", content:"More text"},
]

export const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{ // statin düzenlenmesi silinmesi eklenmesi gibi her türlü action ların yapıldığı kısımdır
        postAdded:(state,action)=>{
            state.push(action.payload)
        },
        postUpdated:(state,action)=>{
            const {id, title, content} = action.payload // yeni title ve content in ne olacağınız kullanıcıdan aldık
            const existingPost =state.find(post => post.id === id);
            if(existingPost){
                existingPost.title=title //title a kullanıcıdan alınan title atandı
                existingPost.content=content //content e kullanıcıdan alınan content atandı 
            }
        }
    }
})

export const {postAdded, postUpdated} =postsSlice.actions;

export default postsSlice.reducer;
//her bir oluşturulan slice için bu slice nin reducer fonksiyonunu store a eklememiz gerek