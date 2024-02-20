import { useEffect, useRef } from "react";
import Header from "../../components/Header/header.component";
import AddNewModal from "../../components/Organisms/AddNewModal/AddNewModal.component";
import EditorBody from "../../components/Organisms/EditorBody/EditorBody.component";
import HistoryModal from "../../components/Organisms/HistoryModal/HistoryModal.component";
import LeftIconMenu from "../../components/Organisms/LeftIconMenu/LeftIconMenu.component";
import LeftIconMenuPanel from "../../components/Organisms/LeftIconMenuPanel/LeftIconMenuPanel.component";
import ModalMediaLibrary from "../../components/Organisms/ModalMediaLibrary/ModalMediaLibrary.component";
import ModalSVGLibrary from "../../components/Organisms/ModalSVGLibrary/ModalSVGLibrary.component";
import RightColumn from "../../components/Organisms/RightColumn/RightColumn.component";
import SaveModal from "../../components/Organisms/SaveModal/SaveModal.component";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Editor = () => {
    const loadedScripts = useRef<boolean>(false);
    useEffect(() => {
        // Function to dynamically load a script
        const loadScript = (src: any) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = false; // This is required for synchronous JavaScript loading
            document.body.appendChild(script);
        };

        // Load the scripts after the component mounts
        // <script src="js/plugins.min.js"></script>
        // <script src="js/palleon.min.js"></script>
        // <script src="js/antimena.js"></script>
        // <script src="js/custom.js"></script>
        // document
        //     .querySelectorAll(
        //         'script[src^="js/antimena.js"], script[src^="js/custom.js"], script[src^="js/plugins.min.js"], script[src^="js/palleon.min.js"]'
        //     )
        //     .forEach((script) => {
        //         document.body.removeChild(script);
        //     });
        // if (!loadedScripts.current) {
        //     loadedScripts.current = true;
        //     loadScript("js/plugins.min.js");
        //     loadScript("js/palleon.min.js");
        //     loadScript("js/antimena.js");
        //     loadScript("js/custom.js");
        // }
        // return () => {
        //     if (loadedScripts.current) {
        //         document
        //             .querySelectorAll(
        //                 'script[src^="js/antimena.js"], script[src^="js/custom.js"], script[src^="js/plugins.min.js, script[src^="js/palleon.min.js"]'
        //             )
        //             .forEach((script) => {
        //                 document.body.removeChild(script);
        //             });
        //     }
        // };
    }, []);

    return (
        <>
            {/* Page Loader START */}
            <div id="palleon-main-loader" className="palleon-loader-wrap">
                <div className="palleon-loader-inner">
                    <div className="palleon-loader" />
                </div>
            </div>
            {/* Page Loader END */}
            <Header />
            <LeftIconMenu />
            <LeftIconMenuPanel />
            <EditorBody />
            <RightColumn />
            <AddNewModal />
            <SaveModal />
            <ModalMediaLibrary />
            <ModalSVGLibrary />
            <HistoryModal />
        </>
    );
};

export default Editor;
