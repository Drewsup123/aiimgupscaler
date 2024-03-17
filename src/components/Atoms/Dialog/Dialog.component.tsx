import React from "react";
import { AnimatePresence } from "framer-motion";
import { BounceInDownDiv } from "../BounceInDown/BounceInDown.component";
import { FadeInButton, FadeInDiv } from "../FadeIn/FadeIn.component";
import { MdOutlineClose } from "react-icons/md";

interface IProps {
    open: boolean;
    onClose: Function;
    children: any;
}

const Dialog = ({ open, onClose, children }: any) => {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <FadeInDiv
                        style={{
                            position: "fixed",
                            background: "rgba(255, 255, 255, 0.1)",
                            zIndex: 10000,
                            top: 0,
                            left: 0,
                            backdropFilter: "blur(5px)",
                            width: "200vw",
                            height: "200vh",
                        }}
                        onClick={() => onClose?.()}
                    />
                    <BounceInDownDiv
                        style={{
                            position: "fixed",
                            background: "#fff",
                            width: "500px",
                            height: "300px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            borderRadius: "5px",
                            zIndex: 10000,
                            top: "calc(50% - 150px)",
                            left: "calc(50% - 250px)",
                        }}
                        onClick={(e: any) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        <FadeInDiv
                            style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                cursor: "pointer",
                            }}
                            onClick={() => onClose?.()}
                        >
                            <MdOutlineClose color="#000" size={28} />
                        </FadeInDiv>
                        {children}
                    </BounceInDownDiv>
                </>
            )}
        </AnimatePresence>
    );
};

export default Dialog;
