import { useCallback, useRef, useState } from "react";
import StyledDropzone from "../../components/Dropzone/StyledDropzone.component";
import styles from "./Home.module.sass";
import { generateId } from "../../utils/uuid.util";
import Upscaler from "upscaler";
import ImageCard from "../../components/Home/ImageCard.component";

export interface IFile {
    file: File;
    id: string;
}

const HomePage = () => {
    const [files, setFiles] = useState<IFile[]>([]);
    const [rescaleKey, setRescaleKey] = useState<number>(0);
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
            </div>
            <StyledDropzone onDrop={handleDrop} />
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
        </div>
    );
};

export default HomePage;
