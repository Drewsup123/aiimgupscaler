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

    return (
        <div className="route">
            <div className={styles.headerSection}>
                <h1>AI-Powered Image Upscaler</h1>
                <sub>
                    Elevate and refine your images using cutting-edge AI
                    technology with our AI Image Upscaler. Now offering batch
                    processing capabilities. Upscaling multiple images is as
                    straightforward as compressing them with TINYPNG!
                </sub>
            </div>
            <StyledDropzone onDrop={handleDrop} />
            <div className={styles.filesPreview}>
                {files.map((file, index) => (
                    <ImageCard
                        key={file.id}
                        file={file}
                        handleRemove={handleRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
