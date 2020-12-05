const ChildrenCard = (list)=>{
    return(
        <ul className="list-container">
            {list.map((item,index)=>{
                return(
                    <li key={index} className="list-item" >
                        <div className="li-card-container">
                            <img src={item.url}></img>
                            <h4>{item.title}</h4>
                            {item.body?<p>{item.body}</p>:''}
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default ChildrenCard;