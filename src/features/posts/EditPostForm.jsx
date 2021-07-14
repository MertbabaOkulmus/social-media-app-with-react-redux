import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated, selectPostById } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params
  //const post = useSelector((state) => state.posts.find(post.id === postId))
  const post = useSelector( state => selectPostById(state,postId))
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  // const user=useSelector(state => state.users.name.find(user.id===post.userId))
  // const [userId,setUserId]=useState(user);

  // const users=useSelector(state => state.users);
  // const userOptions=users.map((user)=>(
  //     <option key={user.id} value={user.id}>{user.name}</option>
  // ))

  const dispatch = useDispatch()
  const history = useHistory()

  const savePost = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <label htmlFor="postAuthor">Author:</label>
                 <select id="postAuthor" value={userId} onChange={e=>setUserId(e.target.value)}>
                    <option value="">{user}</option>
                    {userOptions}
                 </select> */}

        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={savePost}>
          Save Post{' '}
        </button>
      </form>
    </section>
  )
}
