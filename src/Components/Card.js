import './card.css';

const Card = (props)=>{

    return ( 
        <div className={["card-container", props.cName.bg].join(' ')} >

                 {props.img ? (
                    <div class="img-container">
                        <img src={props.imgSrc}></img>
                    </div>): ''}
                    
                 <div className={props.cName.content?props.cName.content:"card-content"}>
                    <div className={"card-title"}><h3>{props.title}</h3></div>
                    <div className="card-subtitle"><h5>{props.subtitle}</h5></div>
                    <div className="card-body">
                        {props.body ?<div> <p>{props.body}</p><p>{props.body}</p><p>{props.body}</p> </div> : ''}
                        {props.children ? props.children : ''}
                    </div>
                    {props.button ? (<div><button className={props.cName.button}> <a>{props.btnvalue}</a> </button></div>): ''}
                 </div>
                 
        </div>
    )
}

export default Card;