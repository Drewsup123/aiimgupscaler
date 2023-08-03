import { useCallback, useRef, useState } from "react";
import usePremiumStatus from "../../hooks/usePremiumStatus";
import useAuth from "../../hooks/useAuth";
import { IFile } from "../../interfaces/dropzone.interface";
import { generateId } from "../../utils/uuid.util";
import { createCheckoutSession } from "../../stripe/createCheckoutSession";
import StyledDropzone from "../../components/Dropzone/StyledDropzone.component";
import styles from "./bgRemover.module.sass";
import ImageCard from "../../components/bgRemoval/ImageCard.component";

const BgRemoverPage = () => {
    const [files, setFiles] = useState<IFile[]>([]);
    const [removeBgKey, setRemoveBgKey] = useState<number>(0);
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
        setRemoveBgKey(removeBgKey + 1);
    };

    const upgradeToPremium = () => {
        if (!authState.user?.uid) return;
        createCheckoutSession(authState.user?.uid);
    };

    return (
        <div className={`route ${styles.bgRemoverWrapper}`}>
            <div className={styles.headerSection}>
                <h1>Image Background Remover</h1>
                <sub>Remove Backgrounds from Images in a single click!</sub>
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
                <StyledDropzone onDrop={handleDrop} disabled={!premiumStatus} />
            </div>
            <div className={styles.allPreviewActions}>
                <button
                    className={styles.removeBtn}
                    onClick={() => handleRemoveAll()}
                    disabled={!premiumStatus}
                >
                    Remove All
                </button>
                <button
                    className={styles.startBtn}
                    onClick={startUpscaleAll}
                    disabled={!premiumStatus}
                >
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
                            removeBgKey={removeBgKey}
                        />
                    ))
                ) : (
                    <span className={styles.noFilesText}>
                        {premiumStatus
                            ? "Start selecting images - they will automatically appear here."
                            : "Upgrade to Premium to get access to this feature."}
                        {premiumStatus ? null : (
                            <button
                                className="premiumButton"
                                onClick={upgradeToPremium}
                            >
                                Upgrade to get unlimited access!
                            </button>
                        )}
                    </span>
                )}
            </div>
        </div>
    );
};

export default BgRemoverPage;
