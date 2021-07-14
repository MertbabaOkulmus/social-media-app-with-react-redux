import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {PostAuthor} from './PostAuthor'
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo'
import { selectPostById } from './postsSlice';

export const SinglePostPage = ({match}) => {
    //  /posts/dklsdklsdksd => postId
    const {postId}=match.params;//hangi postun detaylı gösterileceğini bilmemiz için postId ye ihityacımız var, match.paramas bize url parametresini döndürür o paramatre de id ye eşittir
    /*const post=useSelector((state)=>
        state.posts.find((post)=>post.id === postId)
    )*/

    const post =useSelector(//useSelector de ki state redux state imiz, genel global state, kısacası store da ki veriler 
        (state)=>selectPostById(state,postId)
    ) 
    
    if(!post){
        return(
            <section>
                <h2>Post not found! +{postId}</h2>
            </section>
        )
    }    

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
                <p className="post-content">
                    {post.content}
                </p>
                <ReactionButtons post={post}/>
                <Link to={`/editPost/${post.id}`}>
                    Edit Post
                </Link>
            </article>
        </section>
    )
}
