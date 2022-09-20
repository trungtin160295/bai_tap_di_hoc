




export default function Collection( ) {  
  const collections=[
    {title:"Đồ mặc trong",
    linkImg:"./src/img/mceclip0_43.jpg",
    id:1},
    {title:"Mặc hàng ngày",
    linkImg:"./src/img/mceclip0_99.jpg",
    id:2},
    {title:"Đồ thể thao",
    linkImg:"./src/img/mceclip1_56.jpg",
    id:3},
    {title:"Tất cả",
    linkImg:"./src/img/mceclip1_61.jpg",
    id:4},

  ]
   
    
    return(
        <div className="collections">
            {collections.map((collection) =>{
                return(
                <div className="collection" key={collection.id}>
                    <a href="#">                        
                        <img src={collection.linkImg} alt="" />                        
                        <span className="collection-title">{collection.title}</span>
                    </a>
                </div>
            )
            })}
        </div>
        
        
    )

}