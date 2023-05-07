import BaseCard from '../baseCard/BaseCard';
import styles from './Rating.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Rating = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Ce qu{"'"}ils disent de Floqon</h2>
                <p className={styles.description}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page</p>
            </div>
            <div>
                <Carousel
                    autoPlay
                    swipeable={false}
                    infiniteLoop
                    interval={10000}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                >
                    <div className={styles.cards}>
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"WHITE"} />
                    </div>
                    <div className={styles.cards}>
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"WHITE"} />
                    </div>
                    <div className={styles.cards}>
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/test.png'} name={"Mary P. Arnold"} rating={2} comment={"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."} customStyle={"WHITE"} />
                    </div>
                </Carousel>

            </div>
        </div>
    );
}

export default Rating;