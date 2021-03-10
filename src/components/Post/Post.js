
import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post
    const history = useHistory();
    const showComment = id =>{
      const url = `/post/${id}`
      history.push(url)
    }
    
    return (
        <div>
            <strong>id: {id}</strong>
            <h3>title: {title}</h3>
            <p>body: {body}</p>
            <button onClick={()=>showComment(id)}>show Comment</button>
        </div>
    );
};

export default Post;