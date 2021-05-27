import blogPost from "../03-Props/static/Posts.json";
import Post from "./Post";


const Blog=()=>{
    return(
        <>
        <h1>hello</h1>
        {
            blogPost.map((data)=>(
                <Post key={data.id} data={data}/>
            ))
        }
    
        {
    
    
    
        }
        </>
        )
}
export default Blog;