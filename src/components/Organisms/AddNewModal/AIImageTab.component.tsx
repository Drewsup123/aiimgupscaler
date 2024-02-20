import ClipdropContent from "./ClipDropTab.component";
import OAIContent from "./OAIContent.component";
import SaiContent from "./SAIContent.component";

const AIImageTab = () => {
    return (
        <div id="modal-ai-image" className="palleon-tab palleon-modal-bg">
            <div className="palleon-tabs">
                <ul id="antimena-add-new-apis" className="palleon-tabs-menu">
                    <li data-target="#sai-text-to-text-tab">Stability.ai</li>
                    <li data-target="#oai-text-to-text-tab">OpenAI</li>
                    <li data-target="#clipdrop-text-to-text-tab">Clipdrop</li>
                    <li
                        id="sketch-to-image-link"
                        data-target="#clipdrop-sketch-to-image-tab"
                    >
                        Sketch To Image
                    </li>
                </ul>
                <ClipdropContent />
                <OAIContent />
                <SaiContent />
            </div>
        </div>
    );
};

export default AIImageTab;
