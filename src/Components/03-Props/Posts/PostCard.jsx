const PostCard = ({userId,id,title,body}) => {
    return (
      <div className="contact-card">
        <h3>User ID:{userId}</h3>
        <h3>ID: {id}</h3>
        <p>Title: {title}</p>
        <p>body: {body}</p>
      </div>
    );
  };
  
  export default PostCard;
  