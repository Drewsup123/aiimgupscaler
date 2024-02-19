const EditorBody = () => {
    return (
        <div id="palleon-body">
            <div className="palleon-wrap">
                <div id="palleon-ruler" className="palleon-inner-wrap">
                    {/* Ruler */}
                    <div
                        id="palleon-ruler-icon"
                        className="closed"
                        title="Ruler Menu"
                    />
                    {/* Canvas Content START */}
                    <div id="palleon-content" className="">
                        {/* Canvas Image */}
                        <div id="palleon-canvas-img-wrap">
                            <img
                                id="palleon-canvas-img"
                                src=""
                                data-filename=""
                                data-template=""
                                alt=""
                            />
                            {/* 
              Don't remove img element! To open the editor with a default image, you can update it like the following; 
              <img id="palleon-canvas-img" src="assets/placeholder-big.jpg" data-filename="placeholder" data-template="" />
              To open the editor with a default template, you can update it like the following; 
              <img id="palleon-canvas-img" src="" data-filename="template" data-template="files/templates/json/25.json" /> 
          */}
                        </div>
                        <div id="palleon-canvas-wrap">
                            {/* Canvas Loader */}
                            <div id="palleon-canvas-overlay" />
                            <div id="palleon-canvas-loader">
                                <div className="palleon-loader" />
                            </div>
                            {/* Canvas - Don't remove canvas element! */}
                            <canvas id="palleon-canvas" />
                        </div>
                        {/* Zoom & Pan Buttons */}
                        <div className="palleon-content-bar">
                            <div className="palleon-img-size">
                                <span id="palleon-img-width">0</span>px
                                <span className="material-icons">clear</span>
                                <span id="palleon-img-height">0</span>px
                            </div>
                            <button
                                id="palleon-img-drag"
                                className="palleon-btn"
                            >
                                <span className="material-icons">pan_tool</span>
                            </button>
                            <div
                                id="palleon-img-zoom-counter"
                                className="palleon-counter"
                            >
                                <button
                                    id="palleon-img-zoom-out"
                                    className="counter-minus palleon-btn"
                                >
                                    <span className="material-icons">
                                        remove
                                    </span>
                                </button>
                                <input
                                    id="palleon-img-zoom"
                                    className="palleon-form-field numeric-field"
                                    type="text"
                                    defaultValue={100}
                                    autoComplete="off"
                                    data-min={10}
                                    data-max={200}
                                    data-step={5}
                                />
                                <button
                                    id="palleon-img-zoom-in"
                                    className="counter-plus palleon-btn"
                                >
                                    <span className="material-icons">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Canvas Content END */}
                </div>
            </div>
        </div>
    );
};

export default EditorBody;
