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
