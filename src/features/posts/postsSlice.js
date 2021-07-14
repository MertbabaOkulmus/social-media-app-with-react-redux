import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit' // oluşturulan yeni postlara random otomatik id vermek için kullanacağız
import { sub } from 'date-fns'

const initialState = {
  posts:[],
  loading:true
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // statin düzenlenmesi silinmesi eklenmesi gibi her türlü action ların yapıldığı kısımdır
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find((post) => post.id === postId) // reaksion gerçekleşen post(postId) u post ların içinde tespit ediyoruz, güncelenecek post tespiti
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postAdded: {
      reducer: (state, action) => {
        state,posts.push(action.payload)
      },
      prepare: (title, content, userId) => {
        //üsteki reducer fonksiyonuna veri olarak gider
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(), //kullanıcının postu oluşturduğu tarihi kaydeder
            meta: 'Buraya ek bilgi girebiliriz ihtiyaç olursa',
            error: true, //ihiyaç halinnde kullanıla bilir, action bir hata belirtiyorsa ture değilse false verebilir gibi kullanıla bilir"
            deneme: 'deneme amaçlı yazıldı ',
            reactions:{
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0
              },
          },
        }
      },
    },
    postUpdated: (state, action) => {
      const date = new Date().toISOString() //guncelleme tarihi
      const { id, title, content } = action.payload // yeni title ve content in ne olacağınız kullanıcıdan aldık
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title //title a kullanıcıdan alınan title atandı
        existingPost.content = content //content e kullanıcıdan alınan content atandı
        existingPost.date = date // güncelleme tarihi güncellendi :)
      }
    },
  },
})

export const { reactionAdded, postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
//her bir oluşturulan slice için bu slice nin reducer fonksiyonunu store a eklememiz gerek

export const selectAllPosts = state => state.posts //burda ki state esasında yukardaki initialState dir, tüm postları döndürür 

export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId) //buradaki state global state olarak gelir singlePostPage den, sadece id si eşleşen postu döndürür
/* global state in içi (store)
users:[],
posts:{ //posts.posts dedikten sonra initiallPosts un içinde ki posts lara girmiş olduk
  posts:[], 
  loading:true
}
*/

