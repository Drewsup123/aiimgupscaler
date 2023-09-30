import styles from "../../pages/BgRemover/bgRemover.module.sass";
import { IFile } from "../../pages/Home/Home.page";
import convertToBase64, {
    convertBytesToSize,
} from "../../utils/conversion.util";
import { useEffect, useRef, useState } from "react";
import imglyRemoveBackground from "@imgly/background-removal";
import { downloadImage, openImage } from "../../utils/download.util";
import { PulseLoader } from "react-spinners";

interface IProps {
    file: IFile;
    handleRemove: Function;
    removeBgKey: number;
}

const ImageCard = (props: IProps) => {
    const { file, handleRemove } = props;
    const [loading, setLoading] = useState(false);
    const [removedBgUrl, setRemovedBgUrl] = useState("");
    const [downloading, setDownloading] = useState(false);
    const [percent, setPercent] = useState(0);
    const percentRef = useRef(0);

    const startBgRemoval = async () => {
        const imageUrl: string = await convertToBase64(file.file);
        setLoading(true);
        //! Call background removal
        imglyRemoveBackground(imageUrl, {
            progress: (key: any, current: any, total: any) => {
                if (!current || !total) return;
                const progress = (current / total) * 100;
                if (progress > percentRef.current) {
                    percentRef.current = progress;
                    setPercent((current / total) * 100);
                }
            },
        }).then((blob: Blob) => {
            // The result is a blob encoded as PNG. It can be converted to an URL to be used as HTMLImage.src
            const url = URL.createObjectURL(blob);
            setRemovedBgUrl(url);
            setLoading(false);
        });
    };

    const handleOpen = () => {
        if (!removedBgUrl) return;
        openImage(removedBgUrl, "bg_removed_" + file.file.name);
    };

    const handleDownload = async () => {
        if (!removedBgUrl) return;
        setDownloading(true);
        await downloadImage(removedBgUrl, "bg_removed_" + file.file.name);
        setDownloading(false);
    };

    useEffect(() => {
        if (props.removeBgKey && !removedBgUrl && !loading) {
            startBgRemoval();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.removeBgKey]);

    return (
        <div
            className={styles.filePreviewWrapper}
            style={{
                background: `linear-gradient(to right, rgba(216, 216, 216, 0.8) ${percent}%, #fff ${percent}%)`,
            }}
        >
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
                {removedBgUrl && !loading ? (
                    <>
                        <button className={styles.openBtn} onClick={handleOpen}>
                            Open
                        </button>
                        <button
                            className={styles.downloadBtn}
                            onClick={handleDownload}
                        >
                            {downloading ? (
                                <>
                                    Downloading{" "}
                                    <PulseLoader
                                        color="#fff"
                                        size={5}
                                        style={{ marginLeft: 5 }}
                                    />
                                </>
                            ) : (
                                "Download"
                            )}
                        </button>
                    </>
                ) : (
                    <button
                        className={styles.removeBtn}
                        onClick={() => handleRemove(file.id)}
                        disabled={loading}
                    >
                        Remove
                    </button>
                )}
                {removedBgUrl ? null : (
                    <button
                        className={styles.startBtn}
                        onClick={startBgRemoval}
                    >
                        {loading ? (
                            <>
                                {percent >= 100
                                    ? "Creating Image Url "
                                    : "Removing Background "}
                                <PulseLoader
                                    color="#fff"
                                    size={5}
                                    style={{ marginLeft: 5 }}
                                />
                            </>
                        ) : (
                            "Remove Background"
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ImageCard;
