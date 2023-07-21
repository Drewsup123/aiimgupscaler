import styles from "../../pages/Home/Home.module.sass";
import { IFile } from "../../pages/Home/Home.page";
import convertToBase64, {
    convertBytesToSize,
} from "../../utils/conversion.util";
import { useState } from "react";
import deepai from "deepai";
import { downloadImage, openImage } from "../../utils/download.util";

interface IProps {
    file: IFile;
    handleRemove: Function;
}

const ImageCard = (props: IProps) => {
    const { file, handleRemove } = props;
    const [loading, setLoading] = useState(false);
    const [upscaledUrl, setUpscaledUrl] = useState("");
    const [downloading, setDownloading] = useState(false);
    // const upscaler = new Upscaler();

    const startUpscale = async () => {
        const imageUrl: string = await convertToBase64(file.file);
        console.log(imageUrl);
        setLoading(true);
        deepai
            .callStandardApi("torch-srgan", {
                image: imageUrl,
            })
            .then((res: any) => {
                setLoading(false);
                setUpscaledUrl(res.output_url);
            })
            .catch((err: any) => {
                console.error("Error: ", err);
                setLoading(false);
            });
    };

    const handleOpen = () => {
        if (!upscaledUrl) return;
        // const win = window.open();
        // //@ts-ignore
        // win.document.write('<img src="' + upscaledBase64 + '"/>');
        openImage(upscaledUrl, "upscaled_" + file.file.name);
    };

    const handleDownload = async () => {
        if (!upscaledUrl) return;
        setDownloading(true);
        await downloadImage(upscaledUrl, "upscaled_" + file.file.name);
        setDownloading(false);
    };

    return (
        <div
            className={styles.filePreviewWrapper}
            style={
                {
                    // background: `linear-gradient(to right, red ${percent}%, #fff ${percent}%)`,
                }
            }
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
                {upscaledUrl && !loading ? (
                    <>
                        <button className={styles.openBtn} onClick={handleOpen}>
                            Open
                        </button>
                        <button
                            className={styles.downloadBtn}
                            onClick={handleDownload}
                        >
                            {downloading ? "Downloading..." : "Download"}
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
                {upscaledUrl ? null : (
                    <button className={styles.startBtn} onClick={startUpscale}>
                        {loading ? `Upscaling...` : "Start"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ImageCard;
