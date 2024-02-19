const ModalSVGLibrary = () => {
    return (
        <div id="modal-svg-library" className="palleon-modal">
            <div
                className="palleon-modal-close"
                data-target="#modal-svg-library"
            >
                <span className="material-icons">close</span>
            </div>
            <div className="palleon-modal-wrap">
                <div className="palleon-modal-inner">
                    <div className="palleon-tabs">
                        {/* Menu */}
                        <ul className="palleon-tabs-menu">
                            <li
                                className="active"
                                data-target="#svg-library-my-images"
                            >
                                <span className="material-icons">
                                    photo_library
                                </span>
                                My SVGs
                            </li>
                            <li data-target="#svg-library-all-images">
                                <span className="material-icons">
                                    photo_library
                                </span>
                                Other SVGs
                            </li>
                        </ul>
                        {/* My SVGs */}
                        <div
                            id="svg-library-my-images"
                            className="palleon-tab active"
                        >
                            <div id="palleon-svg-library-my-menu">
                                <div>
                                    <form
                                        className="uploadSVGToLibrary"
                                        encType="multipart/form-data"
                                    >
                                        <div className="palleon-file-field">
                                            <input
                                                type="file"
                                                name="palleon-svg-library-upload-img"
                                                id="palleon-svg-library-upload-img"
                                                className="palleon-hidden-file"
                                                accept="image/svg+xml"
                                            />
                                            <label
                                                htmlFor="palleon-svg-library-upload-img"
                                                className="palleon-btn primary"
                                            >
                                                <span className="material-icons">
                                                    upload
                                                </span>
                                                <span>Upload Image</span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="palleon-search-box">
                                    <input
                                        type="search"
                                        className="palleon-form-field"
                                        placeholder="Search by title..."
                                        autoComplete="off"
                                    />
                                    <button
                                        id="palleon-svg-library-my-search"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            search
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                id="palleon-svg-library-my"
                                className="palleon-grid svg-library-grid paginated"
                                data-perpage={18}
                            />
                            <div
                                id="palleon-svg-library-my-noimg"
                                className="notice notice-warning d-none"
                            >
                                Nothing found.
                            </div>
                        </div>
                        {/* All SVGs */}
                        <div
                            id="svg-library-all-images"
                            className="palleon-tab"
                        >
                            <div id="palleon-svg-library-all-menu">
                                <div />
                                <div className="palleon-search-box">
                                    <input
                                        type="search"
                                        className="palleon-form-field"
                                        placeholder="Search by title..."
                                        autoComplete="off"
                                    />
                                    <button
                                        id="palleon-svg-library-all-search"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            search
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                id="palleon-svg-library-all"
                                className="palleon-grid svg-library-grid paginated"
                                data-perpage={18}
                            >
                                <div
                                    className="palleon-masonry-item"
                                    data-keyword="Abstract Shape"
                                >
                                    <div
                                        className="palleon-library-delete"
                                        data-target=""
                                    >
                                        <span className="material-icons">
                                            remove
                                        </span>
                                    </div>
                                    <div className="palleon-masonry-item-inner">
                                        <div className="palleon-img-wrap">
                                            <div className="palleon-img-loader" />
                                            <img
                                                className="lazy"
                                                data-src="files/elements/abstract-shapes/1.svg"
                                                data-full="files/elements/abstract-shapes/1.svg"
                                                data-filename="abstract-shape"
                                                title="Abstract Shape"
                                                alt=""
                                            />
                                        </div>
                                        <div className="palleon-masonry-item-desc">
                                            Abstract Shape
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="palleon-masonry-item"
                                    data-keyword="another shape"
                                >
                                    <div
                                        className="palleon-library-delete"
                                        data-target=""
                                    >
                                        <span className="material-icons">
                                            remove
                                        </span>
                                    </div>
                                    <div className="palleon-masonry-item-inner">
                                        <div className="palleon-img-wrap">
                                            <div className="palleon-img-loader" />
                                            <img
                                                className="lazy"
                                                data-src="files/elements/abstract-shapes/2.svg"
                                                data-full="files/elements/abstract-shapes/2.svg"
                                                data-filename="another-shape"
                                                title="Another Shape"
                                                alt=""
                                            />
                                        </div>
                                        <div className="palleon-masonry-item-desc">
                                            Another Shape
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="palleon-svg-library-all-noimg"
                                className="notice notice-warning d-none"
                            >
                                <strong>Nothing found.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalSVGLibrary;
