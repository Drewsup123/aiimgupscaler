import ReactCompareImage from "react-compare-image";
import FantasyArchwayBefore from "../../images/fantasy_archway_before.png";
import FantasyArchwayAfter from "../../images/fantasy_archway_after.jpg";
import GirlBefore from "../../images/girl_before.jpg";
import GirlAfter from "../../images/girl_after.jpg";
import MountainBefore from "../../images/mountain_before.jpg";
import MountainAfter from "../../images/mountain_after.jpg";
import CatBefore from "../../images/cat_before.jpg";
import CatAfter from "../../images/cat_after.jpg";
import ArtBefore from "../../images/abstract_before.jpg";
import ArtAfter from "../../images/art_after.jpg";
import styles from "./sample.module.sass";

const SamplePage = () => {
    return (
        <div className={`route ${styles.pageWrapper}`}>
            <h1>Check out some samples!</h1>
            <div className={styles.samplesWrapper}>
                <div className={styles.compareImgWrapper}>
                    <ReactCompareImage
                        leftImage={FantasyArchwayBefore}
                        leftImageLabel="Before"
                        rightImage={FantasyArchwayAfter}
                        rightImageLabel="After"
                    />
                </div>
                <div className={styles.compareImgWrapper}>
                    <ReactCompareImage
                        leftImage={GirlBefore}
                        leftImageLabel="Before"
                        rightImage={GirlAfter}
                        rightImageLabel="After"
                    />
                </div>
                <div className={styles.compareImgWrapper}>
                    <ReactCompareImage
                        leftImage={MountainBefore}
                        leftImageLabel="Before"
                        rightImage={MountainAfter}
                        rightImageLabel="After"
                    />
                </div>
                <div className={styles.compareImgWrapper}>
                    <ReactCompareImage
                        leftImage={CatBefore}
                        leftImageLabel="Before"
                        rightImage={CatAfter}
                        rightImageLabel="After"
                    />
                </div>
                <div className={styles.compareImgWrapper}>
                    <ReactCompareImage
                        leftImage={ArtBefore}
                        leftImageLabel="Before"
                        rightImage={ArtAfter}
                        rightImageLabel="After"
                    />
                </div>
            </div>
        </div>
    );
};

export default SamplePage;
