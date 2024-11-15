/* eslint-disable jsx-a11y/anchor-is-valid */
const ClipDropOptions = () => {
    return (
        <>
            <li
                id="antimena-clipdrop-remove-background"
                className="hide-on-canvas-mode"
            >
                <a href="#">
                    <span className="material-icons accordion-icon">
                        landscape
                    </span>
                    Remove BG
                    <span className="data-premium data-count">PREMIUM</span>
                    <span className="material-icons arrow">
                        keyboard_arrow_down
                    </span>
                </a>
                <div>
                    <div className="palleon-control-desc">
                        Layers will not be pushed to the API. Only the
                        background image will be affected.
                    </div>
                    <button
                        id="clipdrop-remove-background"
                        type="button"
                        className="palleon-btn primary palleon-lg-btn btn-full"
                    >
                        <span className="material-icons arrow">landscape</span>
                        Remove Background
                    </button>
                </div>
            </li>

            <li
                id="antimena-clipdrop-replace-background"
                className="hide-on-canvas-mode"
            >
                <a href="#">
                    <span className="material-icons accordion-icon">
                        landscape
                    </span>
                    Replace BG
                    <span className="data-premium data-count">PREMIUM</span>
                    <span className="material-icons arrow">
                        keyboard_arrow_down
                    </span>
                </a>
                <div>
                    <div className="palleon-control-desc">
                        Layers will not be pushed to the API. Only the
                        background image will be affected.
                    </div>
                    <div className="palleon-control-wrap label-block">
                        <label className="palleon-control-label">
                            Prompt (Required)
                        </label>
                        <div className="palleon-control">
                            <textarea
                                id="clipdrop-replace-bg-prompt"
                                className="palleon-form-field"
                                rows={2}
                                autoComplete="off"
                                maxLength={2000}
                            ></textarea>
                        </div>
                    </div>
                    <div className="palleon-control-desc antimena-desc">
                        Describe the scene you want to teleport your item to.
                    </div>
                    <button
                        id="clipdrop-replace-background"
                        type="button"
                        className="palleon-btn primary palleon-lg-btn btn-full"
                        // autoComplete="off"
                        disabled
                    >
                        <span className="material-icons arrow">landscape</span>
                        Replace Background
                    </button>
                </div>
            </li>

            <li
                id="antimena-clipdrop-inpainting"
                className="hide-on-canvas-mode"
            >
                <a href="#">
                    <span className="material-icons accordion-icon">
                        landscape
                    </span>
                    Cleanup
                    <span className="data-premium data-count">PREMIUM</span>
                    <span className="material-icons arrow">
                        keyboard_arrow_down
                    </span>
                </a>
                <div>
                    <div className="palleon-control-desc">
                        Mark unwanted objects or defects using the "pencil
                        brush" and click the button to remove them from the
                        image. You can use any brush color.
                    </div>
                    <button
                        id="clipdrop-inpainting"
                        type="button"
                        className="palleon-btn primary palleon-lg-btn btn-full"
                    >
                        <span className="material-icons arrow">landscape</span>
                        Cleanup
                    </button>
                </div>
            </li>

            <li
                id="antimena-clipdrop-remove-text"
                className="hide-on-canvas-mode"
            >
                <a href="#">
                    <span className="material-icons accordion-icon">
                        landscape
                    </span>
                    Remove Text
                    <span className="data-premium data-count">PREMIUM</span>
                    <span className="material-icons arrow">
                        keyboard_arrow_down
                    </span>
                </a>
                <div>
                    <div className="palleon-control-desc">
                        Layers will not be pushed to the API. Only the
                        background image will be affected.
                    </div>
                    <button
                        id="clipdrop-remove-text"
                        type="button"
                        className="palleon-btn primary palleon-lg-btn btn-full"
                    >
                        <span className="material-icons arrow">landscape</span>
                        Remove Text
                    </button>
                </div>
            </li>

            <li id="antimena-clipdrop-upscaler">
                <a href="#">
                    <span className="material-icons accordion-icon">
                        landscape
                    </span>
                    Upscaler
                    <span className="data-premium data-count">PREMIUM</span>
                    <span className="material-icons arrow">
                        keyboard_arrow_down
                    </span>
                </a>
                <div>
                    <div className="palleon-control-wrap">
                        <label className="palleon-control-label">Width</label>
                        <div className="palleon-control">
                            <input
                                id="clipdrop-upscale-width"
                                className="palleon-form-field"
                                type="number"
                                defaultValue=""
                                autoComplete="off"
                                data-size=""
                            />
                        </div>
                    </div>
                    <div className="palleon-control-wrap">
                        <label className="palleon-control-label">Height</label>
                        <div className="palleon-control">
                            <input
                                id="clipdrop-upscale-height"
                                className="palleon-form-field"
                                type="number"
                                defaultValue=""
                                autoComplete="off"
                                data-size=""
                            />
                        </div>
                    </div>
                    <button
                        id="clipdrop-upscale"
                        type="button"
                        className="palleon-btn primary palleon-lg-btn btn-full"
                    >
                        <span className="material-icons arrow">landscape</span>
                        Upscale Image
                    </button>
                </div>
            </li>

            <li id="antimena-clipdrop-reimagine">
                <a href="#">
                    <span className="material-icons accordion-icon">
                        landscape
                    </span>
                    Reimagine
                    <span className="data-premium data-count">PREMIUM</span>
                    <span className="material-icons arrow">
                        keyboard_arrow_down
                    </span>
                </a>
                <div>
                    <button
                        id="clipdrop-clipdrop-reimagine"
                        type="button"
                        className="palleon-btn primary palleon-lg-btn btn-full"
                    >
                        <span className="material-icons arrow">landscape</span>
                        Reimagine
                    </button>
                </div>
            </li>
        </>
    );
};

export default ClipDropOptions;
