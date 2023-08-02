import styles from "../../pages/Home/Home.module.sass";
interface IProps {
    imgSrc?: string;
    title?: string;
    hoverTitle?: string;
    description?: string;
}

const WhyCard = (props: IProps) => {
    return (
        <li className={`${styles.card} ${styles.cards__item}`}>
            <div className={styles.card__frame}>
                <div className={styles.card__picture}>
                    <img src={""} alt="" width="120" />
                </div>
                <h2 className={styles.card__title}>{props.title}</h2>
            </div>
            <div className={styles.card__overlay}></div>
            <div className={styles.card__content}>
                <h2>{props.hoverTitle}</h2>
                <p>{props.description}</p>
            </div>
        </li>
    );
};

export default WhyCard;
