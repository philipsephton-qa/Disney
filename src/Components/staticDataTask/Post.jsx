

const Post = (props)=>{

    const {id,body,title,userId} = props.data

    return (
        <>
        <div id={id} >
            <h1>{props.headerText}</h1>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
            {/* <p>{body}</p> */}
        </div>
        </>
    )
}

export default Post;