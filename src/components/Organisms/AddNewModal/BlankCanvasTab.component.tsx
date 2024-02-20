const BlankCanvasTab = () => {
    return (
        <div id="modal-blank-canvas" className="palleon-tab">
            <div className="palleon-control-group">
                <div>
                    <label>Size</label>
                    <select
                        id="palleon-canvas-size-select"
                        className="palleon-select"
                        autoComplete="off"
                    >
                        <option
                            selected={undefined}
                            value="custom"
                            data-width={800}
                            data-height={800}
                        >
                            Custom
                        </option>
                        <option value="" data-width={2240} data-height={1260}>
                            Blog Banner
                        </option>
                        <option value="" data-width={851} data-height={315}>
                            Facebook Cover
                        </option>
                        <option value="" data-width={1200} data-height={628}>
                            Facebook Ad
                        </option>
                        <option value="" data-width={1080} data-height={1080}>
                            Instagram Post
                        </option>
                        <option value="" data-width={750} data-height={1120}>
                            Pinterest Post
                        </option>
                        <option value="" data-width={940} data-height={788}>
                            Facebook Post
                        </option>
                        <option value="" data-width={1600} data-height={900}>
                            Twitter Post
                        </option>
                        <option value="" data-width={1280} data-height={720}>
                            Youtube Thumbnail
                        </option>
                        <option value="" data-width={1920} data-height={1080}>
                            Wallpaper
                        </option>
                    </select>
                </div>
                <div>
                    <label>Width</label>
                    <input
                        id="palleon-canvas-width"
                        className="palleon-form-field"
                        type="number"
                        defaultValue={800}
                        data-min={1}
                        data-max={10000}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label>Height</label>
                    <input
                        id="palleon-canvas-height"
                        className="palleon-form-field"
                        type="number"
                        defaultValue={800}
                        data-min={1}
                        data-max={10000}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label>Background</label>
                    <input
                        id="palleon-canvas-color"
                        type="text"
                        className="palleon-colorpicker allow-empty"
                        autoComplete="off"
                        defaultValue=""
                    />
                </div>
                <div>
                    <button
                        id="palleon-canvas-create"
                        type="button"
                        className="palleon-btn primary"
                    >
                        <span className="material-icons">done</span>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlankCanvasTab;
