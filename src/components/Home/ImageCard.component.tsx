import styles from "../../pages/Home/Home.module.sass";
import { IFile } from "../../pages/Home/Home.page";
import { convertBytesToSize } from "../../utils/conversion.util";
import Upscaler from "upscaler";
import * as tf from "@tensorflow/tfjs";
import { useState } from "react";
import DoubleLoader from "../Loaders/DoubleLoader.component";

interface IProps {
    file: IFile;
    handleRemove: Function;
}

const ImageCard = (props: IProps) => {
    const { file, handleRemove } = props;
    const [loading, setLoading] = useState(false);
    const [upscaledBase64, setUpscaledBase64] = useState("");
    const [percent, setPercent] = useState(0);
    const upscaler = new Upscaler();

    const fileToInput = (file: File) => {
        return new Promise<tf.Tensor3D>((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const input = tf.browser.fromPixels(img);
                resolve(input);
            };
            img.onerror = (error) => {
                reject(error);
            };
        });
    };

    const startUpscale = async () => {
        setLoading(true);
        const fileInput = await fileToInput(file.file);
        upscaler
            .upscale(fileInput, {
                patchSize: 124,
                padding: 8,
                progress: (percent: any) => {
                    console.log("Percent : ", percent);
                    setPercent(percent * 100);
                },
            })
            .then((upscaledImgSrc) => {
                console.log("Upscaled Image : ", upscaledImgSrc);
                setUpscaledBase64(upscaledImgSrc);
                setLoading(false);
                upscaler.dispose();
            });
    };

    const handleOpen = () => {
        if (!upscaledBase64) return;
        const win = window.open();
        //@ts-ignore
        win.document.write('<img src="' + upscaledBase64 + '"/>');
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
                {upscaledBase64 ? (
                    <button className={styles.openBtn} onClick={handleOpen}>
                        Open
                    </button>
                ) : (
                    <button
                        className={styles.removeBtn}
                        onClick={() => handleRemove(file.id)}
                        disabled={loading}
                    >
                        Remove
                    </button>
                )}
                {upscaledBase64 ? null : (
                    <button className={styles.startBtn} onClick={startUpscale}>
                        {loading ? `Upscaling... (${percent}%)` : "Start"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ImageCard;
