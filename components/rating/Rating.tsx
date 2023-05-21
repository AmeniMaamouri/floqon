import BaseCard from '../baseCard/BaseCard';
import styles from './Rating.module.scss'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Rating = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Ce qu{"'"}ils disent de Floqon</h2>
                <p className={styles.description}>Les meilleures recommandations sont celles de nos premiers utilisateurs. Ils ont testé, ils ont
                    approuvé Toi aussi, viens découvrir l’expérience des jeux Floqon !</p>
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
                        <BaseCard img={'/img/Amina-Diop.jpg'} name={"Amina Diop"} rating={5} comment={"J'ai acheté le jeu Floqon pour mes enfants et je suis très impressionné par la façon dont il les a aidés à améliorer leur vocabulaire. Ils s'amusent tout en apprenant de nouveaux mots et thèmes. Je le recommande vivement !"} customStyle={"WHITE"} />
                        <BaseCard img={'/img/Ahmed-Hassan.jpg'} name={"Ahmed Hassan"} rating={5} comment={"L’application Floqon est incroyable ! J'adore les différents jeux et niveaux de difficulté que l’on y retrouve, ainsi que les défis quotidiens pour m'aider à améliorer mon vocabulaire. C'est un excellent moyen de s'amuser tout en apprenant."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/Anastasia-Ivanova.jpg'} name={"Anastasia Ivanova"} rating={5} comment={"Ce jeu est excellent pour les soirées en famille ou entre amis. Nous avons eu beaucoup de plaisir à chercher des mots pour différents thèmes ou catégories et à voir qui de nous pouvait en trouver le plus grand nombre. C'est un jeu facile à comprendre et très divertissant."} customStyle={"WHITE"} />
                    </div>
                    <div className={styles.cards}>
                        <BaseCard img={'/img/Leila-Bouzid.jpg'} name={"Leila Bouzid"} rating={5} comment={"J'ai téléchargé l’application Floqon pour mes enfants et ils l'adorent ! Ils passent des heures à consulter des mots dans les différentes catégories proposées et sont devenus beaucoup plus confiants dans leur capacité à utiliser de nouveaux mots dans leur vie quotidienne."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/Juan-Perez.jpg'} name={"Juan Perez"} rating={5} comment={"J'adore ce jeu Floqon ! Il est idéal pour améliorer mon vocabulaire en français, tout en passant un bon moment. Les thèmes ou catégories sont intéressants et je suis sûr que je vais apprendre beaucoup de nouveaux mots grâce à ces jeux variés."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/Kwame-Amoah.jpg'} name={"Kwamé Amoah"} rating={5} comment={"Cette application est très facile à utiliser et j'aime beaucoup la variété des catégories proposées. C'est un excellent moyen d'améliorer son vocabulaire sans avoir l'impression de travailler."} customStyle={"WHITE"} />
                    </div>
                    <div className={styles.cards}>
                        <BaseCard img={'/img/Maria-Rodriguez.jpg'} name={"Maria Rodriguez"} rating={5} comment={"C'est un excellent moyen et jeu pour les personnes primo-arrivants dans un pays et qui apprennent une nouvelle langue. J'ai acheté ce jeu pour améliorer mon français et je trouve que c'est un excellent moyen de pratiquer mes compétences linguistiques, notamment le vocabulaire usuel, tout en m'amusant."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/Philippe-Dubois.jpg'} name={"Philippe Dubois"} rating={5} comment={"Je suis impressionné par la qualité de cette application. Les illustrations et graphismes sont superbes et la musique est très agréable. C'est un excellent moyen de se détendre tout en apprenant de nouveaux mots."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/Sophie-Bertrand.jpg'} name={"Sophie Bertrand"} rating={5} comment={"Ce jeu est parfait pour les enseignants qui cherchent des moyens ludiques d'enseigner le vocabulaire à leurs élèves. Ils adorent ce jeu et ont beaucoup de plaisir à trouver des mots pour différentes catégories."} customStyle={"WHITE"} />
                    </div>
                    <div className={styles.cards}>
                        <BaseCard img={'/img/Wei-Chen.jpg'} name={"Wei Chen"} rating={5} comment={"Cette application est vraiment amusante et addictive. J'aime le fait qu'il y ait plusieurs modes de jeu différents pour garder les parties différentes et intéressantes à la fois. C'est un excellent moyen de se divertir, tout en améliorant son vocabulaire."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/Emilie-Leroy.jpg'} name={"Emilie Leroy"} rating={5} comment={"C'est un jeu amusant et éducatif pour les enfants et les adultes. Les thèmes ou catégories sont variés et stimulants ; c'est aussi un excellent moyen de passer du temps en famille ou entre amis."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/Nathalie-Lefebvre.jpg'} name={"Nathalie Lefebvre"} rating={5} comment={"Je recommande vivement cette application à tous ceux qui cherchent des moyens amusants d'apprendre des mots nouveaux. Les différents niveaux de difficulté sont bien conçus et les catégories sont variées et stimulantes."} customStyle={"WHITE"} />
                    </div>

                    <div className={styles.cards}>
                        <BaseCard img={'/img/Mohamed-Toumi.jpg'} name={"Mohamed Toumi"} rating={5} comment={"Je recommande le jeu Floqon à tous ceux qui cherchent à améliorer leur vocabulaire. C'est un excellent moyen de se divertir tout en apprenant de nouveaux mots et en explorant différents thèmes ou catégories."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/François-Durand.jpg'} name={"François Durand"} rating={5} comment={"C'est une excellente application pour les personnes qui cherchent à améliorer leur vocabulaire dans une nouvelle langue. Les catégories sont transposables en plusieurs langues et c'est un excellent moyen de pratiquer ses compétences linguistiques."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/Lucie-Berthier.jpg'} name={"Lucie Berthier"} rating={5} comment={"Le jeu Floqon Alphabet est simple et facile à jouer, mais il est également très addictif. J'ai passé des heures à chercher des mots pour différents thèmes et j'ai appris beaucoup de nouveaux mots en cours de route. En plus, nous avons l’application mobile qui nous aide à découvrir tous les mots liés à chacun des thèmes."} customStyle={"WHITE"} />
                    </div>

                    <div className={styles.cards}>
                        <BaseCard img={'/img/Fatima-Ali.jpg'} name={"Fatima Ali"} rating={5} comment={"Cette application est très éducative et stimulante. J'ai trouvé que c'était un excellent moyen de se préparer pour un petit concours de jeu de mots ou de vocabulaire entre amis."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/Marie-Louise Martin.jpg'} name={"Marie-Louise Martin"} rating={5} comment={"C'est un excellent jeu pour les personnes qui cherchent à améliorer aussi leur mémoire. J'ai trouvé que Floqon était un excellent moyen d'exercer mon cerveau et de me souvenir de nouveaux mots pour chaque thème abordé. Et dès que j’en oubliais un, je courais tout de suite consulter mon carnet de mots dans mon espace personnel."} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/Mathilde-Moreau.jpg'} name={"Mathilde Moreau"} rating={5} comment={"Je suis très satisfait de cette application. C'est un excellent moyen de tuer le temps, tout en apprenant de nouveaux mots et de nouvelles catégories. Je la recommande fortement à tous ceux qui cherchent à améliorer leur vocabulaire."} customStyle={"WHITE"} />
                    </div>


                    <div className={styles.cards}>
                        <BaseCard img={'/img/Jacques-Bernadin.jpg'} name={"Jacques Bernabin"} rating={5} comment={"J'aime beaucoup ce jeu Floqon, car il est amusant, éducatif et intergénérationnel. Je le recommande vraiment à tous ceux qui cherchent des moyens amusants d'apprendre et d'améliorer leur vocabulaire."} customStyle={"WHITE"} />
                        <BaseCard img={'/img/Astou-Konaté.jpg'} name={"Astou Konaté"} rating={5} comment={" Je suis vraiment impressionnée par ce jeu, que ce soit sous form physique ou en tant qu'application mobile. C'est un excellent moyen de s'amuser tout en améliorant son vocabulaire. Les catégories sont stimulantes et variées, et j'adore le défi de trouver des mots commençant par une lettre donnée. Que je joue avec mes amis, autour d'une table ou sur mon téléphone lors de mes déplacements, je suis toujours captivée par ce jeu. Je le recommande à tous ceux qui cherchent à enrichir leur vocabulaire et à passer un bon moment !"} customStyle={"PURPLE"} />
                        <BaseCard img={'/img/Ming-Li.jpg'} name={"Ming Li"} rating={5} comment={"Cette application Floqon est géniale ! J'aime beaucoup les défis quotidiens et le fait que je peux suivre ma progression au fil du temps. C'est un excellent moyen de se motiver pour continuer à apprendre de nouveaux mots."} customStyle={"WHITE"} />
                    </div>


                </Carousel>

            </div>
        </div>
    );
}

export default Rating;