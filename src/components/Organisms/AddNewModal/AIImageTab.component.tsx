import usePremiumStatus from "../../../hooks/usePremiumStatus";
import UpgradeToPremiumButton from "../../Molecules/UpgradeToPremiumButton/UpgradeToPremiumButton.component";
import ClipdropContent from "./ClipDropTab.component";
import OAIContent from "./OAIContent.component";
import SaiContent from "./SAIContent.component";

const AIImageTab = () => {
    const isPremium = usePremiumStatus();

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
                        style={{
                            pointerEvents: isPremium ? "all" : "none",
                        }}
                    >
                        Sketch To Image
                    </li>
                    <li>
                        <UpgradeToPremiumButton
                            label="Upgrade to get unlimited access!"
                            style={{
                                whiteSpace: "nowrap",
                                width: "100%",
                            }}
                        />
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
