import PostCard from "./PostCard"


const postContact =()=>{

    return(
        <div className="contacts">
            <PostCard
                userId={1}
                id={1}
                title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            />
            <PostCard
                userId={2}
                id={2}
                title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            />
            <PostCard
                userId={3}
                id={3}
                title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
                body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            />
            <PostCard
               userId={4}
               id={4}
               title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
               body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            />
           
        </div>
    )

}

export default postContact;