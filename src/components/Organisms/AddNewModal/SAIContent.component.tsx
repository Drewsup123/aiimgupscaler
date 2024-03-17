import UpgradeToPremiumButton from "../../Molecules/UpgradeToPremiumButton/UpgradeToPremiumButton.component";

/* eslint-disable jsx-a11y/anchor-is-valid */
const SaiContent = () => {
    return (
        <div id="sai-text-to-text-tab" className="palleon-tab">
            <div className="modal-ai-image-wrap">
                <div className="modal-ai-image-column-left">
                    <div
                        id="antimena-loader-1"
                        className="palleon-loader-wrap antimena-loader"
                    >
                        <div className="palleon-loader"></div>
                    </div>
                    <div
                        id="sai-images"
                        className="palleon-grid antimena-grid antimena-grid-placeholder"
                    >
                        <div className="palleon-masonry-item">
                            <div className="palleon-masonry-item-inner">
                                <div className="palleon-img-wrap">
                                    <img
                                        src="assets/ai-placeholder.png"
                                        alt="AI Placeholder"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="palleon-masonry-item">
                            <div className="palleon-masonry-item-inner">
                                <div className="palleon-img-wrap">
                                    <img
                                        src="assets/ai-placeholder.png"
                                        alt="AI Placeholder"
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
                                    id="sai-prompt"
                                    className="palleon-form-field"
                                    rows={2}
                                    autoComplete="off"
                                    placeholder="Post-apocalyptic wasteland with rusted and abandoned vehicles, dust storms and towering dust clouds, gritty, dark, dramatic, apocalyptic, stylized"
                                    maxLength={2000}
                                ></textarea>
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <span className="material-icons accordion-icon text-danger">
                                    cancel
                                </span>
                                Negative Prompt
                                <span className="material-icons arrow">
                                    keyboard_arrow_down
                                </span>
                            </a>
                            <div>
                                <textarea
                                    id="sai-negative-prompt"
                                    className="palleon-form-field"
                                    rows={2}
                                    autoComplete="off"
                                    placeholder="black and white, monochrome"
                                    maxLength={2000}
                                ></textarea>
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <span className="material-icons accordion-icon">
                                    image
                                </span>
                                Source
                                <span className="material-icons arrow">
                                    keyboard_arrow_down
                                </span>
                            </a>
                            <div>
                                <div className="palleon-control-wrap label-block">
                                    <label className="palleon-control-label">
                                        Image Size
                                    </label>
                                    <div className="palleon-control">
                                        <select
                                            id="sai-size"
                                            className="palleon-select"
                                            autoComplete="off"
                                        ></select>
                                    </div>
                                </div>
                                <div className="palleon-control-wrap label-block">
                                    <label className="palleon-control-label">
                                        Seed (Optional)
                                    </label>
                                    <div className="palleon-control">
                                        <input
                                            id="sai-seed"
                                            className="palleon-form-field"
                                            type="number"
                                            defaultValue=""
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="palleon-control-wrap label-block">
                                    <label className="palleon-control-label slider-label">
                                        Image Count<span>2</span>
                                    </label>
                                    <div className="palleon-control">
                                        <input
                                            id="sai-samples"
                                            type="range"
                                            min="1"
                                            max="10"
                                            defaultValue="2"
                                            step="1"
                                            className="palleon-slider"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="palleon-control-desc">
                                    Number of images to generate.
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <span className="material-icons accordion-icon">
                                    brush
                                </span>
                                Style
                                <span className="material-icons arrow">
                                    keyboard_arrow_down
                                </span>
                            </a>
                            <div>
                                <div className="palleon-control-wrap label-block">
                                    <label className="palleon-control-label">
                                        Style Preset
                                    </label>
                                    <div className="palleon-control">
                                        <select
                                            id="sai-style-presets"
                                            className="palleon-select"
                                            autoComplete="off"
                                        >
                                            <option value="" selected>
                                                Auto
                                            </option>
                                            <option value="3d-model">
                                                3d Model
                                            </option>
                                            {/* Add other options here */}
                                        </select>
                                    </div>
                                </div>
                                <div className="palleon-control-wrap label-block">
                                    <label className="palleon-control-label slider-label">
                                        CFG Scale<span>7</span>
                                    </label>
                                    <div className="palleon-control">
                                        <input
                                            id="sai-cfg"
                                            type="range"
                                            min="0"
                                            max="35"
                                            defaultValue="7"
                                            step="1"
                                            className="palleon-slider"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="palleon-control-desc">
                                    How strictly the diffusion process adheres
                                    to the prompt text (higher values keep your
                                    image closer to your prompt).
                                </div>
                                {/* Additional controls */}
                            </div>
                        </li>
                    </ul>
                    <UpgradeToPremiumButton>
                        <>
                            <button
                                id="sai-image-generate"
                                type="button"
                                className="palleon-btn primary palleon-lg-btn btn-full"
                                disabled
                            >
                                <span className="material-icons arrow">
                                    landscape
                                </span>
                                Generate
                            </button>
                            <div
                                id="sai-balance-notice"
                                className="notice notice-info"
                            >
                                <span id="sai-balance"></span>
                                <a href="#" id="sai-balance-check">
                                    <span className="material-icons arrow">
                                        refresh
                                    </span>
                                </a>
                            </div>
                        </>
                    </UpgradeToPremiumButton>
                </div>
            </div>
        </div>
    );
};

export default SaiContent;
