const NewImageTab = () => {
    return (
        <div id="modal-select-img" className="palleon-tab active">
            <div className="palleon-select-btn-block">
                <div>
                    <div className="palleon-btn-set">
                        <div className="palleon-file-field">
                            <input
                                type="file"
                                name="palleon-image-upload"
                                id="palleon-image-upload"
                                className="palleon-hidden-file"
                                accept="image/png, image/jpeg, image/webp"
                            />
                            <label
                                htmlFor="palleon-image-upload"
                                className="palleon-btn primary palleon-lg-btn"
                            >
                                <span className="material-icons">upload</span>
                                <span>Upload Image</span>
                            </label>
                        </div>
                        <button
                            id="palleon-media-library"
                            type="button"
                            className="palleon-btn primary palleon-lg-btn palleon-modal-open"
                            data-target="#modal-media-library"
                        >
                            <span className="material-icons">
                                photo_library
                            </span>
                            Select From Media Library
                        </button>
                    </div>
                    <div className="palleon-keep">
                        <label className="palleon-checkbox">
                            <input
                                id="keep-data"
                                type="checkbox"
                                autoComplete="off"
                            />
                            <span className="palleon-checkmark" />
                        </label>
                        <div>Keep current objects and filters</div>
                    </div>
                </div>
                <div>
                    <div className="palleon-file-field">
                        <input
                            type="file"
                            name="palleon-json-upload"
                            id="palleon-json-upload"
                            className="palleon-hidden-file"
                            accept=".json,application/JSON"
                        />
                        <label
                            htmlFor="palleon-json-upload"
                            className="palleon-btn primary palleon-lg-btn"
                        >
                            <span className="material-icons">upload</span>
                            <span>Upload Template</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewImageTab;
