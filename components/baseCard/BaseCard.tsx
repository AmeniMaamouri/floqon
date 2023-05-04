import styles from './BaseCard.module.scss'
import StarRatingComponent from 'react-star-rating-component';

const BaseCard = ({ img, name, rating, comment, customStyle }: { img: string, name: string, rating: number, comment: string, customStyle: 'PURPLE' | 'WHITE' }) => {
    return (
        <div style={customStyle === "PURPLE" ? { boxShadow: '0px 20px 70px rgba(28, 28, 55, 0.2)', backgroundColor: '#9B457A', marginTop: '-40px', height: 'fit-content' } : { backgroundColor: 'white' }} className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <img className={styles.avatar} src={img} />
                    <div>
                        <p style={customStyle === "PURPLE" ? { color: 'white' } : { color: 'black' }} className={styles.name}>{name}</p>
                        <StarRatingComponent
                            name='start1'
                            starCount={5}
                            value={rating}
                            editing={false}
                         
                            renderStarIcon={() => <img src={customStyle === "PURPLE" ? '/img/startForPurple.png' : '/img/Star.png'} />}
                        />
                    </div>
                </div>
                <p style={customStyle === "PURPLE" ? { color: "white" } : { color: "#4E545F" }} className={styles.comment}>{comment}</p>
            </div>
        </div>
    );
}

export default BaseCard;