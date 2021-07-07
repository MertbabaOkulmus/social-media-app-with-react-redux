import { configureStore } from '@reduxjs/toolkit'
import postReducer from "../features/posts/postsSlice"
import userSlice from '../features/users/userSlice' ;

export default configureStore({
  reducer:{
    posts:postReducer, // global redux store un içerisinde posts diye bir dilim oluşturduk, bu posts dan da sorumlu olan reducer postReducer dedik
    //kullanıcı posts ile ilgili hernagi bir action işlemi yaptığı zaman postReducer fonksiyonu çalışacak
    
    users:userSlice
  },
})
