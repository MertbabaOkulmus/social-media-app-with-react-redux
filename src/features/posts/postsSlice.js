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
        // postUpdated:(){
            
        // }
    }
})

export const {postAdded} =postsSlice.actions;

export default postsSlice.reducer;
//her bir oluşturulan slice için bu slice nin reducer fonksiyonunu store a eklememiz gerek