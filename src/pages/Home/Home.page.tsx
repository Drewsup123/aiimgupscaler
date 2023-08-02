import { useCallback, useRef, useState } from "react";
import StyledDropzone from "../../components/Dropzone/StyledDropzone.component";
import styles from "./Home.module.sass";
import { generateId } from "../../utils/uuid.util";
import Upscaler from "upscaler";
import ImageCard from "../../components/Home/ImageCard.component";
import useAuth from "../../hooks/useAuth";
import { createCheckoutSession } from "../../stripe/createCheckoutSession";
import Samples from "../../components/Samples.component";
import usePremiumStatus from "../../hooks/usePremiumStatus";
import WhyCard from "../../components/Home/WhyCard.component";

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
        </div>
    );
};

export default HomePage;
