import { useCallback, useRef, useState } from "react";
import StyledDropzone from "../../components/Dropzone/StyledDropzone.component";
import styles from "./Home.module.sass";
import { generateId } from "../../utils/uuid.util";
import ImageCard from "../../components/Home/ImageCard.component";
import useAuth from "../../hooks/useAuth";
import { createCheckoutSession } from "../../stripe/createCheckoutSession";
import Samples from "../../components/Home/Samples.component";
import usePremiumStatus from "../../hooks/usePremiumStatus";
import WhyCard from "../../components/Home/WhyCard.component";
import ReactCompareImage from "react-compare-image";
// Image Imports
import DogBefore from "../../images/bg_dog_before.jpg";
import DogAfter from "../../images/bg_dog_after.png";
import ParrotBefore from "../../images/bg_parrot_before.jpg";
import ParrotAfter from "../../images/bg_parrot_after.png";
import TowerBefore from "../../images/bg_tower_before.jpg";
import TowerAfter from "../../images/bg_tower_after.png";
import EditorImage from "../../images/editor_1.jpg";
import EditorTemplatesImage from "../../images/editor_templates_1.jpg";

export interface IFile {
    file: File;
    id: string;
}

const HomePage = () => {
    const [files, setFiles] = useState<IFile[]>([]);
    const [rescaleKey, setRescaleKey] = useState<number>(0);
    const { authState } = useAuth();
    const premiumStatus = usePremiumStatus();
    const filesRef = useRef<IFile[]>([]);
    if (files) {
        filesRef.current = files;
    }

    const handleDrop = useCallback(
        (droppedFiles: File[]) => {
            console.log("Dropped Files : ", droppedFiles);
            const newFiles = droppedFiles.map((file) => ({
                file,
                id: generateId(),
            }));
            console.log("Old Files : ", files);
            setFiles([...filesRef.current, ...newFiles]);
        },
        [files]
    );

    const handleRemove = (fileId: string) => {
        const filteredFiles = [...files].filter((f) => f.id !== fileId);
        setFiles(filteredFiles);
    };

    const handleRemoveAll = () => {
        setFiles([]);
    };

    const startUpscaleAll = () => {
        setRescaleKey(rescaleKey + 1);
    };

    const upgradeToPremium = () => {
        if (!authState.user?.uid) return;
        createCheckoutSession(authState.user?.uid);
    };

    return (
        <div className={`route ${styles.homeWrapper}`}>
            <div className={styles.headerSection}>
                <h1>AI-Powered Image Upscaler</h1>
                <sub>
                    Elevate and refine your images using cutting-edge AI
                    technology with our AI Image Upscaler. Now offering batch
                    processing capabilities. Upscaling multiple images is fast
                    and easy!
                </sub>
                {premiumStatus ? null : (
                    <button
                        className="premiumButton"
                        onClick={upgradeToPremium}
                    >
                        Upgrade to get unlimited access!
                    </button>
                )}
            </div>
            <div className={styles.dropzoneWrapper}>
                <StyledDropzone onDrop={handleDrop} />
            </div>
            <div className={styles.allPreviewActions}>
                <button
                    className={styles.removeBtn}
                    onClick={() => handleRemoveAll()}
                >
                    Remove All
                </button>
                <button className={styles.startBtn} onClick={startUpscaleAll}>
                    Start All
                </button>
            </div>
            <div className={styles.filesPreview}>
                {files.length ? (
                    files.map((file, index) => (
                        <ImageCard
                            key={file.id}
                            file={file}
                            handleRemove={handleRemove}
                            rescaleKey={rescaleKey}
                        />
                    ))
                ) : (
                    <span className={styles.noFilesText}>
                        Start selecting files - they will automatically appear
                        here.
                    </span>
                )}
            </div>
            <div className={styles.samplesSection}>
                <h2>Extremely fast, simple, and powerful</h2>
                <h6>
                    Move the slider left and right to view how the images have
                    transformed into something beautiful.
                </h6>
                <Samples />
            </div>
            <div className={styles.whyUsSection}>
                <h2>Why Choose AI Img Tools</h2>
                <ul className={styles.cards}>
                    <WhyCard
                        title="Fast"
                        description="Experience the power of the latest AI and Upscaling technology, 
                        making the upscaling process lightning fast. In just a matter of seconds, witness remarkable transformations."
                        hoverTitle="Lightning Fast Upscaling"
                    />
                    <WhyCard
                        title="Easy"
                        hoverTitle="Effortless"
                        description=" Embrace the Smoothest Upscaling Experience. Upload one or multiple images, click Start, and behold your upscaled images in mere seconds."
                    />
                    <WhyCard
                        title="Affordable"
                        hoverTitle="Budget Friendly"
                        description="Enjoy Our Cost-Effective Solution with a Single Plan granting you limitless access to all our exceptional services!"
                    />
                </ul>
            </div>
            <div className={styles.bgRemoverSection}>
                <h2>Background Remover</h2>
                <h6>
                    Easily remove the background of any photo with a single
                    click!
                </h6>
                <div className={styles.previewWrapper}>
                    <div className={styles.compareImgWrapper}>
                        <ReactCompareImage
                            leftImage={TowerBefore}
                            rightImage={TowerAfter}
                            leftImageLabel="Before"
                            rightImageLabel="After"
                        />
                    </div>
                    <div className={styles.compareImgWrapper}>
                        <ReactCompareImage
                            leftImage={ParrotBefore}
                            rightImage={ParrotAfter}
                            leftImageLabel="Before"
                            rightImageLabel="After"
                        />
                    </div>
                    <div className={styles.compareImgWrapper}>
                        <ReactCompareImage
                            leftImage={DogBefore}
                            rightImage={DogAfter}
                            leftImageLabel="Before"
                            rightImageLabel="After"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.editorSection}>
                <h2>Fully Featured Photo Editor</h2>
                <h6>
                    Easily edit and make tweaks to your photos with a large
                    amount of tools in our photo editor.
                </h6>
                <div className={styles.sectionWrapper}>
                    <div className={styles.largerSection}>
                        <img src={EditorImage} alt="Editor" />
                    </div>
                    <div className={styles.smallerSection}>
                        <h2>Introducing AI IMG TOOLS Photo Editor</h2>
                        <p>
                            Your go-to online photo editor that's ingeniously
                            designed to cater to both amateurs and
                            professionals. Explore a world of creativity with a
                            feature-rich interface that allows you to unleash
                            the full potential of your images, all from the
                            comfort of your web browser!
                        </p>
                        <br />
                        <h2>Some of our Features:</h2>
                        <ul>
                            <li>
                                <strong>Quick Adjustments:</strong> With a wide
                                array of sliders and preset options, you can
                                tweak exposure, contrast, color balance, and
                                more, all at the click of a button. Your photo
                                enhancements are now just seconds away!
                            </li>
                            <li>
                                <strong>Shapes & Text:</strong> Want to add a
                                personal touch? Insert various shapes and
                                overlay text in numerous fonts, colors, and
                                styles to make your images uniquely yours.
                            </li>
                            <li>
                                <strong>QR Code Generation:</strong> Turn your
                                images into QR codes effortlessly! Share links,
                                contacts, or any data you want through your
                                pictures.
                            </li>
                            <li>
                                <strong>Background Removal:</strong> Clean up
                                your images with our intelligent background
                                removal tool. Whether it's for a
                                professional-looking product shot or a perfect
                                profile picture, we've got you covered.
                            </li>
                            <li>
                                <strong>Icon Integration:</strong> Browse
                                through our extensive library of icons or upload
                                your own, and sprinkle them across your pictures
                                for that extra flair.
                            </li>
                            <li>
                                <strong>Add Other Images:</strong> Want to
                                create a collage or simply blend images? Our
                                editor enables you to insert multiple pictures,
                                providing endless possibilities for creativity.
                            </li>
                            <li>
                                <strong>Borders & Frames:</strong> Frame your
                                photos with our wide selection of borders. From
                                simple lines to intricate designs, you'll find
                                the perfect border to complement your image.
                            </li>
                            <li>
                                <strong>Overlay Images:</strong> Overlaying
                                images has never been simpler! Blend, merge, and
                                play with opacity to achieve the look you
                                desire.
                            </li>
                        </ul>

                        <p style={{ textAlign: "center", marginTop: 20 }}>
                            AI IMG TOOLS editor is not just an editor; it's a
                            creative workshop designed to meet your artistic
                            needs without any steep learning curves. With an
                            intuitive interface, and constant updates this your
                            digital canvas to create, edit, and express. Whether
                            you're a blogger, marketer, photographer, or just
                            someone who loves playing with photos, our editor
                            brings your vision to life.
                        </p>
                    </div>
                </div>
                <div className={styles.sectionWrapper}>
                    <div className={styles.smallerSection}>
                        <p>
                            Our intuitive photo editor is equipped with an
                            extensive collection of professionally designed
                            templates, enabling you to launch your projects with
                            ease and efficiency. Whether you're crafting
                            eye-catching YouTube thumbnails, engaging
                            advertisements, vibrant Twitter posts, inspirational
                            quotes, artistic collages, or more, our prebuilt
                            templates are precisely tailored to meet your needs.
                            Start exploring and unleash your creativity today!
                        </p>
                    </div>
                    <div className={styles.largerSection}>
                        <img
                            src={EditorTemplatesImage}
                            alt="Editor Templates"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
