import { useCallback, useRef, useState } from "react";
import StyledDropzone from "../../components/Dropzone/StyledDropzone.component";
import styles from "./Home.module.sass";
import { convertBytesToSize } from "../../utils/conversion.util";
import { generateId } from "../../utils/uuid.util";

interface IFile {
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

    const startUpscale = (fileId: string) => {
        const foundFile = files.find((f) => f.id === fileId);
        console.log("Start upscale : ", foundFile);
    };

    const handleRemove = (fileId: string) => {
        const filteredFiles = [...files].filter((f) => f.id !== fileId);
        setFiles(filteredFiles);
    };

    console.log("Files : ", files);

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
                    <div key={index} className={styles.filePreviewWrapper}>
                        <img
                            src={URL.createObjectURL(file.file)}
                            alt={file.file.name}
                            style={{ width: "100px", height: "100px" }}
                        />
                        <div className={styles.previewInfo}>
                            <p>{file.file.name}</p>
                            <p>{convertBytesToSize(file.file.size)}</p>
                        </div>
                        <div className={styles.actionsContainer}>
                            <button
                                className={styles.startBtn}
                                onClick={() => startUpscale(file.id)}
                            >
                                Start
                            </button>
                            <button
                                className={styles.removeBtn}
                                onClick={() => handleRemove(file.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
