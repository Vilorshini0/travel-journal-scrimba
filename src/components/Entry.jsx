import Markericon from '../assets/marker.png'

export default function Entry(props) {
    return(
        <article className="cards">
            <figure>
                <img src={`/assets/${props.img.src}`} alt={props.img.alt} />
            </figure>
            <section className='cardInfo'>
                <p>
                    <img className="marker" src={Markericon} alt="map marker icon" />
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </p>
                <h2>{props.title}</h2>
                <p className="title">{props.dates}</p>
                <p className="description">{props.text}</p>
            </section>
        </article>
    )
}