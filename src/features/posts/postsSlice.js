import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit' // oluşturulan yeni postlara random otomatik id vermek için kullanacağız
import { sub } from 'date-fns'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post!',
    content: 'More text',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // statin düzenlenmesi silinmesi eklenmesi gibi her türlü action ların yapıldığı kısımdır
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload)
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

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
//her bir oluşturulan slice için bu slice nin reducer fonksiyonunu store a eklememiz gerek
