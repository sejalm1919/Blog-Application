import "./post.css"

export default function post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" 
        />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
      <p className="postDesc">
        Lorem,ipsum dolor sit consectetur adipisicing elit. Ad nesciunt
        minus accusamus magni quaerat cumque blanditiis
      </p>
    </div>
  )
}
