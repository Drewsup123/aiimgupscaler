/* eslint-disable jsx-a11y/anchor-is-valid */
const OAIContent = () => {
    return (
        <div id="oai-text-to-text-tab" className="palleon-tab">
            <div className="modal-ai-image-wrap">
                <div className="modal-ai-image-column-left">
                    <div
                        id="antimena-loader-4"
                        className="palleon-loader-wrap antimena-loader"
                    >
                        <div className="palleon-loader"></div>
                    </div>
                    <div
                        id="oai-images"
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
                                    id="oai-prompt"
                                    className="palleon-form-field"
                                    rows={2}
                                    // autocomplete="off"
                                    placeholder="Post-apocalyptic wasteland with rusted and abandoned vehicles, dust storms and towering dust clouds, gritty, dark, dramatic, apocalyptic, stylized"
                                    maxLength={1000}
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
                                            id="oai-size"
                                            className="palleon-select"
                                        >
                                            <option value="1024x1024" selected>
                                                1024x1024 px
                                            </option>
                                            <option value="1792x1024">
                                                1792x1024 px
                                            </option>
                                            <option value="1024x1792">
                                                1024x1792 px
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="">
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
                                        Quality
                                    </label>
                                    <div className="palleon-control">
                                        <select
                                            id="oai-quality"
                                            className="palleon-select"
                                        >
                                            <option value="standard" selected>
                                                Standard
                                            </option>
                                            <option value="hd">HD</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="palleon-control-wrap label-block">
                                    <label className="palleon-control-label">
                                        Style
                                    </label>
                                    <div className="palleon-control">
                                        <select
                                            id="oai-style"
                                            className="palleon-select"
                                        >
                                            <option value="vivid" selected>
                                                Vivid
                                            </option>
                                            <option value="natural">
                                                Natural
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="palleon-control-desc">
                                    Vivid causes the model to lean towards
                                    generating hyper-real and dramatic images.
                                    Natural causes the model to produce more
                                    natural, less hyper-real looking images.
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button
                        id="oai-image-generate"
                        type="button"
                        className="palleon-btn primary palleon-lg-btn btn-full"
                        disabled
                    >
                        <span className="material-icons arrow">landscape</span>
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OAIContent;
