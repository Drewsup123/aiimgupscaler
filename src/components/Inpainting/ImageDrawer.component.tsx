import React, { useRef, useState } from "react";

const ImageDrawer: React.FC = () => {
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const drawingCanvasRef = useRef<HTMLCanvasElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const brushSize = 5; // You can change this value or make it adjustable by the user

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImageURL(reader.result as string);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleMouseDown = () => {
        setIsDrawing(true);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        drawingCanvasRef.current?.getContext("2d")?.beginPath();
    };

    const handleMouseMove = (
        e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
    ) => {
        const drawingCtx = drawingCanvasRef.current?.getContext("2d");
        const previewCtx = previewCanvasRef.current?.getContext("2d");
        const { offsetX, offsetY } = e.nativeEvent;

        if (previewCtx && drawingCtx) {
            previewCtx.clearRect(
                0,
                0,
                previewCanvasRef.current?.width || 0,
                previewCanvasRef.current?.height || 0
            ); // Clear previous brush preview

            // Draw a preview of the brush size
            previewCtx.beginPath();
            previewCtx.arc(offsetX, offsetY, brushSize / 2, 0, Math.PI * 2);
            previewCtx.fillStyle = "rgba(0,0,0,0.2)"; // Semi-transparent circle
            previewCtx.fill();

            if (isDrawing) {
                drawingCtx.lineWidth = brushSize;
                drawingCtx.lineCap = "round";
                drawingCtx.strokeStyle = "black"; // Color for the mask

                drawingCtx.lineTo(offsetX, offsetY);
                drawingCtx.stroke();
                drawingCtx.beginPath();
                drawingCtx.moveTo(offsetX, offsetY);
            }
        }
    };

    const handleSaveMask = () => {
        const link = document.createElement("a");
        link.href = drawingCanvasRef.current?.toDataURL("image/png") || "";
        link.download = "mask.png";
        link.click();
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} />
            <div
                style={{
                    position: "relative",
                    display: imageURL ? "inline-block" : "none",
                }}
            >
                <img
                    ref={imageRef}
                    src={imageURL || ""}
                    alt="background"
                    onLoad={() => {
                        if (
                            imageRef.current &&
                            drawingCanvasRef.current &&
                            previewCanvasRef.current
                        ) {
                            drawingCanvasRef.current.width =
                                imageRef.current.width;
                            drawingCanvasRef.current.height =
                                imageRef.current.height;
                            previewCanvasRef.current.width =
                                imageRef.current.width;
                            previewCanvasRef.current.height =
                                imageRef.current.height;
                        }
                    }}
                />
                <canvas
                    ref={drawingCanvasRef}
                    style={{ position: "absolute", left: 0, top: 0 }}
                />
                <canvas
                    ref={previewCanvasRef}
                    style={{ position: "absolute", left: 0, top: 0 }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                />
            </div>
            <button onClick={handleSaveMask}>Save Mask</button>
        </div>
    );
};

export default ImageDrawer;
