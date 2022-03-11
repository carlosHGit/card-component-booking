import styles from '../styles/PlaceCard.module.css'
import placePic from '../assets/images/image14.png'
import fullHeart from '../assets/logos/icons-full-heart.svg'
import emptyHeart from '../assets/logos/icons-empty-heart.svg'
import starLogo from '../assets/logos/icons8-star-90 2.svg'
import Image from 'next/image'

export default function PlaceCard(props) {
  return (
    <div className={styles.main_container}>
      <div className="image_container">
        <Image
          src={placePic}
          alt={"Place image"}
        />
      </div>
      <div className={styles.details_container}>
        <div className={styles.card_header}>
          <p>{props.place.title1}</p>
          <Image
            className={styles.like_logo}
            src={props.place.like ? fullHeart : emptyHeart}
            alt={"Place image"}
          />
        </div>
        <div className={styles.card_body}>
          <h2>{props.place.title2}</h2>
          <hr className={styles.line}></hr>
          <p>{props.place.perks}</p>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.container_puntuation}>
            <Image
              src={starLogo}
              alt={"Place image"}
            />
            <p>{props.place.calification}</p>
            <p>{`( ${props.place.comments} Reseñas) `}</p>
          </div>
          <div className={styles.container_price}>
            <p>{`$${props.place.price} COP `}</p>
            <p>/ noche</p>
          </div>
        </div>
      </div>
    </div>
  )
}
