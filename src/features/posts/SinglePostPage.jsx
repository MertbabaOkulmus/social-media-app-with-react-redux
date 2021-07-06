import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SinglePostPage = ({match}) => {
    //  /posts/dklsdklsdksd => postId
    const {postId}=match.params;//hangi postun detaylı gösterileceğini bilmemiz için postId ye ihityacımız var, match.paramas bize url parametresini döndürür o paramatre de id ye eşittir
    const post=useSelector((state)=>
        state.posts.find((post)=>post.id === postId)
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
                <p className="post-content">
                    {post.content}
                </p>
                <Link to={`/editPost/${post.id}`}>
                    Edit Post
                </Link>
            </article>
        </section>
    )
}
