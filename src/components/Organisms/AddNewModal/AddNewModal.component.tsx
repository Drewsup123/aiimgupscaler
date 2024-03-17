import UpgradeToPremiumButton from "../../Molecules/UpgradeToPremiumButton/UpgradeToPremiumButton.component";
import AIImageTab from "./AIImageTab.component";
import BlankCanvasTab from "./BlankCanvasTab.component";
import NewImageTab from "./NewImageTab.component";
import TemplateLibraryTab from "./TemplateLibraryTab.component";

const AddNewModal = () => {
    return (
        <div id="modal-add-new" className="palleon-modal">
            <div className="palleon-modal-close" data-target="#modal-add-new">
                <span className="material-icons">close</span>
            </div>
            <div className="palleon-modal-wrap">
                <div className="palleon-modal-inner large">
                    <div className="palleon-tabs">
                        {/* Menu */}
                        <ul className="palleon-tabs-menu">
                            <li
                                className="active"
                                data-target="#modal-select-img"
                            >
                                <span className="material-icons">
                                    file_upload
                                </span>
                                New Image
                            </li>
                            <li data-target="#modal-template-library">
                                <span className="material-icons">
                                    photo_library
                                </span>
                                Template Library
                            </li>
                            <li data-target="#modal-blank-canvas">
                                <span className="material-icons">
                                    crop_original
                                </span>
                                Blank Canvas
                            </li>
                            <li data-target="#modal-ai-image">
                                <span className="material-icons">
                                    landscape
                                </span>
                                AI Image
                            </li>
                        </ul>
                        <NewImageTab />
                        <TemplateLibraryTab />
                        <BlankCanvasTab />
                        <AIImageTab />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewModal;
