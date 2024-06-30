
function Card(props){


    return (
        <>
         <div className="card">
            <div className="card__image">
                <img src={`/images/${props.item.image}`}className="card__img" />
            </div>
            <div className="card__info">
                <div className="wrap">
                    <span className="pin"><img src={`/images/Map_pin.svg`} alt="" /></span>
                    <p className="country">{props.item.country}</p>
                    <span><a href={props.item.googlemaps}>View on maps</a></span>
                </div>
                <h1>{props.item.place}</h1>
                <p className="date">{props.item.visit.start} - {props.item.visit.end}</p>
                <p className="description">{props.item.description}</p>
            </div>
            
        </div>
       
        </>
       
    )
}

export default Card