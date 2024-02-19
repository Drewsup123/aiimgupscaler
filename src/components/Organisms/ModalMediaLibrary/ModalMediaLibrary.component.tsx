const ModalMediaLibrary = () => {
    return (
        <div id="modal-media-library" className="palleon-modal">
            <div
                className="palleon-modal-close"
                data-target="#modal-media-library"
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
                                data-target="#media-library-images"
                            >
                                Media Library
                            </li>
                            <li data-target="#pexels">Pexels</li>
                            <li data-target="#pixabay">Pixabay</li>
                        </ul>
                        {/* Media Library */}
                        <div
                            id="media-library-images"
                            className="palleon-tab active"
                        >
                            <div className="palleon-tabs">
                                <ul className="palleon-tabs-menu">
                                    <li
                                        data-target="#library-my-images"
                                        className="active"
                                    >
                                        My Images
                                    </li>
                                    <li data-target="#library-all-images">
                                        Other Images
                                    </li>
                                </ul>
                                {/* My Images */}
                                <div
                                    id="library-my-images"
                                    className="palleon-tab active"
                                >
                                    <div id="palleon-library-my-menu">
                                        <div>
                                            <form
                                                className="uploadImgToLibrary"
                                                encType="multipart/form-data"
                                            >
                                                <div className="palleon-file-field">
                                                    <input
                                                        type="file"
                                                        name="palleon-library-upload-img"
                                                        id="palleon-library-upload-img"
                                                        className="palleon-hidden-file"
                                                        accept="image/png, image/jpeg, image/webp"
                                                    />
                                                    <label
                                                        htmlFor="palleon-library-upload-img"
                                                        className="palleon-btn primary"
                                                    >
                                                        <span className="material-icons">
                                                            upload
                                                        </span>
                                                        <span>
                                                            Upload Image
                                                        </span>
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
                                                id="palleon-library-my-search"
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
                                        id="palleon-library-my"
                                        className="palleon-grid media-library-grid paginated"
                                        data-perpage={18}
                                    />
                                    <div
                                        id="palleon-library-my-noimg"
                                        className="notice notice-warning d-none"
                                    >
                                        Nothing found.
                                    </div>
                                </div>
                                {/* All Images */}
                                <div
                                    id="library-all-images"
                                    className="palleon-tab"
                                >
                                    <div id="palleon-library-all-menu">
                                        <div />
                                        <div className="palleon-search-box">
                                            <input
                                                type="search"
                                                className="palleon-form-field"
                                                placeholder="Search by title..."
                                                autoComplete="off"
                                            />
                                            <button
                                                id="palleon-library-all-search"
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
                                        id="palleon-library-all"
                                        className="palleon-grid media-library-grid paginated"
                                        data-perpage={18}
                                    >
                                        <div
                                            className="palleon-masonry-item"
                                            data-keyword="lorem"
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
                                                        data-src="assets/placeholder.jpg"
                                                        data-full="assets/placeholder-big.jpg"
                                                        data-filename="Lorem"
                                                        title="Lorem"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="palleon-masonry-item-desc">
                                                    Lorem ipsum dolor
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="palleon-masonry-item"
                                            data-keyword="ipsum"
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
                                                        data-src="assets/placeholder.jpg"
                                                        data-full="assets/placeholder-big.jpg"
                                                        data-filename="Lorem"
                                                        title="Lorem"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="palleon-masonry-item-desc">
                                                    Lorem ipsum dolor
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="palleon-library-all-noimg"
                                        className="notice notice-warning d-none"
                                    >
                                        <strong>Nothing found.</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pexels */}
                        <div id="pexels" className="palleon-tab">
                            <div id="pexels-menu">
                                <div id="pexels-search-options">
                                    <select
                                        id="pexels-orientation"
                                        className="palleon-select"
                                        autoComplete="off"
                                        disabled={undefined}
                                    >
                                        <option value="" selected={undefined}>
                                            All Orientations
                                        </option>
                                        <option value="landscape">
                                            Landscape
                                        </option>
                                        <option value="portrait">
                                            Portrait
                                        </option>
                                        <option value="square">Square</option>
                                    </select>
                                    <select
                                        id="pexels-color"
                                        className="palleon-select"
                                        autoComplete="off"
                                        disabled={undefined}
                                    >
                                        <option value="" selected={undefined}>
                                            All Colors
                                        </option>
                                        <option value="white">White</option>
                                        <option value="black">Black</option>
                                        <option value="gray">Gray</option>
                                        <option value="brown">Brown</option>
                                        <option value="blue">Blue</option>
                                        <option value="turquoise">
                                            Turquoise
                                        </option>
                                        <option value="red">Red</option>
                                        <option value="violet">Violet</option>
                                        <option value="pink">Pink</option>
                                        <option value="orange">Orange</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="green">Green</option>
                                    </select>
                                </div>
                                <div className="palleon-search-box">
                                    <input
                                        id="palleon-pexels-keyword"
                                        type="search"
                                        className="palleon-form-field"
                                        placeholder="Enter a keyword..."
                                        autoComplete="off"
                                    />
                                    <button
                                        id="palleon-pexels-search"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            search
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div id="pexels-output"></div>
                            <a
                                id="pexels-credit"
                                href="https://www.pexels.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Photos provided by Pexels
                            </a>
                        </div>
                        {/* Pixabay */}
                        <div id="pixabay" className="palleon-tab">
                            <div id="pixabay-menu">
                                <div id="pixabay-search-options">
                                    <select
                                        id="pixabay-orientation"
                                        className="palleon-select"
                                        autoComplete="off"
                                    >
                                        <option value="" selected={"" as any}>
                                            All Orientations
                                        </option>
                                        <option value="horizontal">
                                            Horizontal
                                        </option>
                                        <option value="vertical">
                                            Vertical
                                        </option>
                                    </select>
                                    <select
                                        id="pixabay-color"
                                        className="palleon-select"
                                        autoComplete="off"
                                    >
                                        <option value="" selected={"" as any}>
                                            All Colors
                                        </option>
                                        <option value="white">White</option>
                                        <option value="black">Black</option>
                                        <option value="gray">Gray</option>
                                        <option value="grayscale">
                                            Grayscale
                                        </option>
                                        <option value="brown">Brown</option>
                                        <option value="blue">Blue</option>
                                        <option value="turquoise">
                                            Turquoise
                                        </option>
                                        <option value="red">Red</option>
                                        <option value="lilac">Lilac</option>
                                        <option value="pink">Pink</option>
                                        <option value="orange">Orange</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="green">Green</option>
                                    </select>
                                    <select
                                        id="pixabay-category"
                                        className="palleon-select"
                                        autoComplete="off"
                                    >
                                        <option value="" selected={"" as any}>
                                            All Categories
                                        </option>
                                        <option value="backgrounds">
                                            Backgrounds
                                        </option>
                                        <option value="fashion">Fashion</option>
                                        <option value="nature">Nature</option>
                                        <option value="science">Science</option>
                                        <option value="education">
                                            Education
                                        </option>
                                        <option value="feelings">
                                            Feelings
                                        </option>
                                        <option value="health">Health</option>
                                        <option value="people">People</option>
                                        <option value="religion">
                                            Religion
                                        </option>
                                        <option value="places">Places</option>
                                        <option value="animals">Animals</option>
                                        <option value="industry">
                                            Industry
                                        </option>
                                        <option value="computer">
                                            Computer
                                        </option>
                                        <option value="food">Food</option>
                                        <option value="sports">Sports</option>
                                        <option value="transportation">
                                            Transportation
                                        </option>
                                        <option value="travel">Travel</option>
                                        <option value="buildings">
                                            Buildings
                                        </option>
                                        <option value="business">
                                            Business
                                        </option>
                                        <option value="music">Music</option>
                                    </select>
                                </div>
                                <div className="palleon-search-box">
                                    <input
                                        id="palleon-pixabay-keyword"
                                        type="search"
                                        className="palleon-form-field"
                                        placeholder="Enter a keyword..."
                                        autoComplete="off"
                                    />
                                    <button
                                        id="palleon-pixabay-search"
                                        type="button"
                                        className="palleon-btn primary"
                                    >
                                        <span className="material-icons">
                                            search
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div id="pixabay-output"></div>
                            <a
                                id="pixabay-credit"
                                href="https://www.pixabay.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Photos provided by Pixabay
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalMediaLibrary;
