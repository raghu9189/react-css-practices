import lemon from '../assets/lemon.webp'
import '../styles/Card.css'

function Card() {
  return (
    <div>
        <img src={lemon} className='card-img' alt="lemon" />
        <figcaption className='card-caption'>Lorem ipsum dolor sit amet consectetur</figcaption>
    </div>
  )
}

export default Card

/*
https://timesofindia.indiatimes.com/life-style/health-fitness/diet/lemon-benefits-5-changes-that-happens-in-the-body-when-one-eats-1-lemon-everyday/photostory/118115313.cms?picid=118115687
*/