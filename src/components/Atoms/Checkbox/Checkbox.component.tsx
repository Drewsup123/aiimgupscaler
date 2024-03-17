import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkbox.module.sass";
import { motion } from "framer-motion";
import { MdOutlineCheck } from "react-icons/md";

interface IProps {
    onChange: Function;
    checked: boolean;
    label?: any;
}

const Checkbox = (props: IProps) => {
    const { onChange } = props;

    const handleChange = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        onChange(!props.checked);
    };

    return (
        <div className={styles.checkboxContainer}>
            <motion.div
                onClick={handleChange}
                className={
                    styles.customCheckbox +
                    ` ${props.checked ? styles.active : ""}`
                }
                initial={{ opacity: 0, y: 50, border: "1px solid transparent" }}
                animate={{
                    opacity: 1,
                    y: 0,
                    border: "1px solid #000",
                    background: props.checked ? "#22A3EE" : "#fff",
                }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: 50, border: "1px solid #000" }}
            >
                {props.checked && (
                    <motion.div
                        onClick={handleChange}
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        initial={{
                            opacity: 0,
                            transform: "translateY(50px)",
                        }}
                        animate={{
                            opacity: 1,
                            transform: "translateY(0px)",
                        }}
                        exit={{ opacity: 0, transform: "translateY(50px)" }}
                    >
                        <MdOutlineCheck
                            size={24}
                            color="#fff"
                            fontWeight={800}
                        />
                    </motion.div>
                )}
            </motion.div>
            <label className={styles.checkboxLabel}>
                {props.label || null}
            </label>
        </div>
    );
};

export default Checkbox;
