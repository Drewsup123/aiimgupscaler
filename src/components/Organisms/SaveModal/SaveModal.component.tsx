const SaveModal = () => {
    return (
        <div id="modal-save" className="palleon-modal">
            <div className="palleon-modal-close" data-target="#modal-save">
                <span className="material-icons">close</span>
            </div>
            <div className="palleon-modal-wrap">
                <div className="palleon-modal-inner">
                    <div className="palleon-tabs">
                        {/* Menu */}
                        <ul className="palleon-tabs-menu">
                            <li
                                className="active"
                                data-target="#modal-tab-save"
                            >
                                <span className="material-icons">save</span>
                                Save
                            </li>
                            <li data-target="#modal-tab-download">
                                <span className="material-icons">download</span>
                                Download
                            </li>
                        </ul>
                        {/* Save File */}
                        <div id="modal-tab-save" className="palleon-tab active">
                            <div id="palleon-save-as-img">
                                <div className="palleon-block-50">
                                    <div>
                                        <label>File Name</label>
                                        <input
                                            id="palleon-save-img-name"
                                            className="palleon-form-field palleon-file-name"
                                            type="text"
                                            defaultValue=""
                                            autoComplete="off"
                                            data-default=""
                                        />
                                    </div>
                                    <button
                                        id="palleon-save-img"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            save
                                        </span>
                                        Save As Image
                                    </button>
                                </div>
                                <div className="palleon-block-33">
                                    <div>
                                        <label>DPI</label>
                                        <select
                                            id="palleon-save-img-dpi"
                                            className="palleon-select"
                                            autoComplete="off"
                                        >
                                            <option
                                                selected={"" as any}
                                                value={72}
                                            >
                                                72 DPI - Monitor Resolution
                                            </option>
                                            <option value={96}>96 DPI</option>
                                            <option value={144}>144 DPI</option>
                                            <option value={300}>
                                                300 DPI - Printer Resolution
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Image Quality</label>
                                        <select
                                            id="palleon-save-img-quality"
                                            className="palleon-select"
                                            autoComplete="off"
                                        >
                                            <option
                                                selected={"" as any}
                                                value={1}
                                            >
                                                100%
                                            </option>
                                            <option value="0.9">90%</option>
                                            <option value="0.8">80%</option>
                                            <option value="0.7">70%</option>
                                            <option value="0.6">60%</option>
                                            <option value="0.5">50%</option>
                                            <option value="0.4">40%</option>
                                            <option value="0.3">30%</option>
                                            <option value="0.2">20%</option>
                                            <option value="0.1">10%</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>File Format</label>
                                        <select
                                            id="palleon-save-img-format"
                                            className="palleon-select"
                                            autoComplete="off"
                                        >
                                            <option
                                                selected={"" as any}
                                                value="jpeg"
                                            >
                                                JPEG
                                            </option>
                                            <option value="png">PNG</option>
                                            <option value="svg">SVG</option>
                                            <option value="webp">WEBP</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="palleon-save-as-json">
                                <div className="palleon-block-50">
                                    <div>
                                        <label>File Name</label>
                                        <input
                                            id="palleon-json-save-name"
                                            className="palleon-form-field palleon-file-name"
                                            type="text"
                                            defaultValue=""
                                            autoComplete="off"
                                            data-default=""
                                        />
                                    </div>
                                    <button
                                        id="palleon-json-save"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            save
                                        </span>
                                        Save As Template
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Download File */}
                        <div id="modal-tab-download" className="palleon-tab ">
                            <div id="palleon-download-as-img">
                                <div className="palleon-block-50">
                                    <div>
                                        <label>File Name</label>
                                        <input
                                            id="palleon-download-name"
                                            className="palleon-form-field palleon-file-name"
                                            type="text"
                                            defaultValue=""
                                            autoComplete="off"
                                            data-default=""
                                        />
                                    </div>
                                    <button
                                        id="palleon-download"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            download
                                        </span>
                                        Download As Image
                                    </button>
                                </div>
                                <div className="palleon-block-33">
                                    <div>
                                        <label>DPI</label>
                                        <select
                                            id="palleon-download-img-dpi"
                                            className="palleon-select"
                                            autoComplete="off"
                                        >
                                            <option
                                                selected={"" as any}
                                                value={72}
                                            >
                                                72 DPI - Monitor Resolution
                                            </option>
                                            <option value={96}>96 DPI</option>
                                            <option value={144}>144 DPI</option>
                                            <option value={300}>
                                                300 DPI - Printer Resolution
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Image Quality</label>
                                        <select
                                            id="palleon-download-quality"
                                            className="palleon-select"
                                            autoComplete="off"
                                        >
                                            <option
                                                selected={"" as any}
                                                value={1}
                                            >
                                                100%
                                            </option>
                                            <option value="0.9">90%</option>
                                            <option value="0.8">80%</option>
                                            <option value="0.7">70%</option>
                                            <option value="0.6">60%</option>
                                            <option value="0.5">50%</option>
                                            <option value="0.4">40%</option>
                                            <option value="0.3">30%</option>
                                            <option value="0.2">20%</option>
                                            <option value="0.1">10%</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>File Format</label>
                                        <select
                                            id="palleon-download-format"
                                            className="palleon-select"
                                            autoComplete="off"
                                        >
                                            <option
                                                selected={"" as any}
                                                value="jpeg"
                                            >
                                                JPEG
                                            </option>
                                            <option value="png">PNG</option>
                                            <option value="svg">SVG</option>
                                            <option value="webp">WEBP</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="palleon-download-as-json">
                                <div className="palleon-block-50">
                                    <div>
                                        <label>File Name</label>
                                        <input
                                            id="palleon-json-download-name"
                                            className="palleon-form-field palleon-file-name"
                                            type="text"
                                            defaultValue=""
                                            autoComplete="off"
                                            data-default=""
                                        />
                                    </div>
                                    <button
                                        id="palleon-json-download"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            download
                                        </span>
                                        Download As Template
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveModal;
