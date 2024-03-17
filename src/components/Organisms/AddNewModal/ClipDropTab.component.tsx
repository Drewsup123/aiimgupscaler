import usePremiumStatus from "../../../hooks/usePremiumStatus";
import UpgradeToPremiumButton from "../../Molecules/UpgradeToPremiumButton/UpgradeToPremiumButton.component";

/* eslint-disable jsx-a11y/anchor-is-valid */
const ClipdropContent = () => {
    const isPremium = usePremiumStatus();
    return (
        <>
            <div id="clipdrop-text-to-text-tab" className="palleon-tab">
                <div className="modal-ai-image-wrap">
                    <div className="modal-ai-image-column-left">
                        <div
                            id="antimena-loader-2"
                            className="palleon-loader-wrap antimena-loader"
                        >
                            <div className="palleon-loader"></div>
                        </div>
                        <div
                            id="clipdrop-images"
                            className="palleon-grid antimena-grid antimena-grid-placeholder"
                        >
                            <div className="palleon-masonry-item">
                                <div className="palleon-masonry-item-inner">
                                    <div className="palleon-img-wrap">
                                        <img
                                            src="assets/ai-placeholder.png"
                                            alt="Placeholder"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-ai-image-column-right">
                        <ul className="palleon-accordion">
                            <li className="opened">
                                <a href="#">
                                    <span className="material-icons accordion-icon text-success">
                                        check_circle
                                    </span>
                                    Prompt (required)
                                    <span className="material-icons arrow">
                                        keyboard_arrow_down
                                    </span>
                                </a>
                                <div>
                                    <textarea
                                        id="clipdrop-prompt"
                                        className="palleon-form-field"
                                        rows={2}
                                        autoComplete="off"
                                        placeholder="Post-apocalyptic wasteland with rusted and abandoned vehicles, dust storms and towering dust clouds, gritty, dark, dramatic, apocalyptic, stylized"
                                        maxLength={2000}
                                    ></textarea>
                                </div>
                            </li>
                        </ul>
                        <UpgradeToPremiumButton>
                            <button
                                id="clipdrop-image-generate"
                                type="button"
                                className="palleon-btn primary palleon-lg-btn btn-full"
                                disabled
                            >
                                <span className="material-icons arrow">
                                    landscape
                                </span>
                                Generate
                            </button>
                        </UpgradeToPremiumButton>
                    </div>
                </div>
            </div>

            <div id="clipdrop-sketch-to-image-tab" className="palleon-tab">
                <div className="modal-ai-image-wrap">
                    <div className="modal-ai-image-column-left">
                        <div
                            id="antimena-loader-3"
                            className="palleon-loader-wrap antimena-loader"
                        >
                            <div className="palleon-loader"></div>
                        </div>
                        <div id="sketch-to-image-wrap">
                            <canvas id="sketch-to-image-canvas"></canvas>
                        </div>
                    </div>
                    <div className="modal-ai-image-column-right">
                        <div
                            id="clipdrop-sketch-images"
                            className="palleon-grid antimena-grid antimena-grid-placeholder"
                        ></div>
                        <ul className="palleon-accordion">
                            <li className="opened">
                                <a href="#">
                                    <span className="material-icons accordion-icon text-success">
                                        check_circle
                                    </span>
                                    Prompt (required)
                                    <span className="material-icons arrow">
                                        keyboard_arrow_down
                                    </span>
                                </a>
                                <div>
                                    <textarea
                                        id="sketch-to-image-prompt"
                                        className="palleon-form-field"
                                        rows={2}
                                        autoComplete="off"
                                        maxLength={2000}
                                    ></textarea>
                                    <div className="palleon-control-desc">
                                        Generate an image corresponding to the
                                        sketch and the prompt describing what
                                        you expect.
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="material-icons accordion-icon">
                                        settings
                                    </span>
                                    Brush Settings
                                    <span className="material-icons arrow">
                                        keyboard_arrow_down
                                    </span>
                                </a>
                                <div>
                                    <div className="palleon-control-wrap label-block">
                                        <label className="palleon-control-label">
                                            Brush Width
                                        </label>
                                        <div className="palleon-control">
                                            <input
                                                id="sketch-to-image-brush-width"
                                                className="palleon-form-field numeric-field"
                                                type="number"
                                                defaultValue="8"
                                                autoComplete="off"
                                                data-min="1"
                                                data-max="1000"
                                                data-step="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="palleon-control-wrap control-text-color label-block">
                                        <label className="palleon-control-label">
                                            Brush Color
                                        </label>
                                        <div className="palleon-control">
                                            <input
                                                id="sketch-to-image-brush-color"
                                                type="text"
                                                className="palleon-colorpicker disallow-empty"
                                                autoComplete="off"
                                                defaultValue="#6658ea"
                                            />
                                        </div>
                                    </div>
                                    <div className="palleon-control-wrap palleon-submit-btns sketch-to-image-buttons">
                                        <button
                                            id="sketch-to-image-undo"
                                            type="button"
                                            className="palleon-btn tooltip"
                                            data-title="Undo"
                                        >
                                            <span className="material-icons">
                                                undo
                                            </span>
                                        </button>
                                        <button
                                            id="sketch-to-image-clear"
                                            type="button"
                                            className="palleon-btn tooltip"
                                            data-title="Clear"
                                        >
                                            <span className="material-icons">
                                                delete
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button
                            id="sketch-to-image-generate"
                            type="button"
                            className="palleon-btn primary palleon-lg-btn btn-full"
                            disabled
                        >
                            <span className="material-icons arrow">
                                landscape
                            </span>
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClipdropContent;
