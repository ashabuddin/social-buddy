import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams()
    const[post, setPost] = useState({})
    const[comments, setComments] = useState([])
    useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res => res.json())
       .then(data => setPost(data)) 
    },[])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h3>This is post detail: {id}</h3>
                <h2>title: {post.title}</h2>
                <p>body: {post.body}</p>
                <p> Number of comment: {comments.length} </p>
                {
                    comments.map(comment => <Comment comment={comment}></Comment>)
                }
        </div>
    );
};

export default PostDetail;