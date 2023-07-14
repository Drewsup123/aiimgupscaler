import React, { useMemo } from "react";
import {
    useDropzone,
    DropzoneRootProps,
    DropzoneInputProps,
} from "react-dropzone";

interface IProps {
    onDrop?: Function;
}

const baseStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#eeeeee",
    borderStyle: "solid",
    backgroundColor: "rgba( 255, 255, 255, 0.25 )",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
    backdropFilter: "blur( 4px )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    cursor: "pointer",
    zIndex: 5,
    minHeight: 300,
};

const activeStyle: React.CSSProperties = {
    borderColor: "#2196f3",
};

const acceptStyle: React.CSSProperties = {
    borderColor: "#349CCD",
};

const rejectStyle: React.CSSProperties = {
    borderColor: "#E94E71",
};

const StyledDropzone: React.FC<IProps> = (props: IProps) => {
    const onDrop = React.useCallback((acceptedFiles: File[]) => {
        props.onDrop && props.onDrop(acceptedFiles);
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: {
            "image/jpeg": [".jpeg", ".jpg"],
            "image/png": [".png"],
        },
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    const rootProps: DropzoneRootProps = { ...getRootProps({ style }) };
    const inputProps: DropzoneInputProps = { ...getInputProps() };

    return (
        <div {...rootProps}>
            <input {...inputProps} />
            <p
                style={{
                    fontSize: 24,
                    color: "#fff",
                }}
            >
                Drag 'n' drop some files here, or click to select files
            </p>
        </div>
    );
};

export default StyledDropzone;
