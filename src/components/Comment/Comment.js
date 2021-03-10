
import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment
    return (
        <div>
            <h2>This is comment: {name}</h2>
            <p>Email: {email}</p>
            
        </div>
    );
};

export default Comment;