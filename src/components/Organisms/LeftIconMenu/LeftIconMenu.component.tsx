const LeftIconMenu = () => {
    return (
        <div id="palleon-icon-menu">
            <button
                id="palleon-btn-adjust"
                type="button"
                className="palleon-icon-menu-btn active"
                data-target="#palleon-adjust"
            >
                <span className="material-icons">tune</span>
                <span className="palleon-icon-menu-title">Adjust</span>
            </button>
            <button
                id="palleon-btn-frames"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-frames"
            >
                <span className="material-icons">wallpaper</span>
                <span className="palleon-icon-menu-title">Frames</span>
            </button>
            <button
                id="palleon-btn-text"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-text"
            >
                <span className="material-icons">title</span>
                <span className="palleon-icon-menu-title">Text</span>
            </button>
            <button
                id="palleon-btn-image"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-image"
            >
                <span className="material-icons">add_photo_alternate</span>
                <span className="palleon-icon-menu-title">Image</span>
            </button>
            <button
                id="palleon-btn-shapes"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-shapes"
            >
                <span className="material-icons">category</span>
                <span className="palleon-icon-menu-title">Shapes</span>
            </button>
            <button
                id="palleon-btn-elements"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-elements"
            >
                <span className="material-icons">star</span>
                <span className="palleon-icon-menu-title">Elements</span>
            </button>
            <button
                id="palleon-btn-icons"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-icons"
            >
                <span className="material-icons">emoji_emotions</span>
                <span className="palleon-icon-menu-title">Icons</span>
            </button>
            <button
                id="palleon-btn-apps"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-apps"
            >
                <span className="material-icons">apps</span>
                <span className="palleon-icon-menu-title">Apps</span>
            </button>
            <button
                id="palleon-btn-draw"
                type="button"
                className="palleon-icon-menu-btn"
                data-target="#palleon-draw"
            >
                <span className="material-icons">brush</span>
                <span className="palleon-icon-menu-title">Brushes</span>
            </button>
            <button
                id="palleon-btn-settings"
                type="button"
                className="palleon-icon-menu-btn stick-to-bottom"
                data-target="#palleon-settings"
            >
                <span className="material-icons">settings</span>
                <span className="palleon-icon-menu-title">Settings</span>
            </button>
        </div>
    );
};

export default LeftIconMenu;
