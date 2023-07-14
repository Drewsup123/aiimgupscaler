import { useState } from "react";
import StyledDropzone from "../../components/Dropzone/StyledDropzone.component";
import styles from "./Home.module.sass";
import { convertBytesToSize } from "../../utils/conversion.util";

const HomePage = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleDrop = (droppedFiles: File[]) => {
        setFiles([...files, ...droppedFiles]);
    };

    console.log("Dropped Files : ", files);

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
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            style={{ width: "100px", height: "100px" }}
                        />
                        <div className={styles.previewInfo}>
                            <p>{file.name}</p>
                            <p>{convertBytesToSize(file.size)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
