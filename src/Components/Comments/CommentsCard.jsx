const CommentCard = ({postId,id,name,email,body}) => {
    return (
      <div className="contact-card">
        <h3>Post ID:{postId}</h3>
        <h3>ID: {id}</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Body: {body}</p>
      </div>
    );
  };
  
  export default CommentCard;
  