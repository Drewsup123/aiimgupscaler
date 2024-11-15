const RightColumn = () => {
    return (
        <>
            {/* Toggle Right Button */}
            <div id="palleon-toggle-right">
                <span className="material-icons">chevron_right</span>
            </div>
            {/* Right Column START */}
            <div id="palleon-right-col">
                <h6 className="palleon-layers-title">
                    <span className="material-icons">layers</span>Layers
                </h6>
                <div id="palleon-no-layer">
                    No layers found. You can add text, element, image etc. to
                    the canvas to create a layer.{" "}
                    <a href="#" className="palleon-toggle-right">
                        Close Panel
                    </a>
                </div>
                {/* Layer list - Don't remove it! */}
                <ul id="palleon-layers" />
                {/* Bulk delete layers */}
                <div id="palleon-layer-delete-wrap">
                    <select
                        id="palleon-layer-select"
                        className="palleon-select"
                        autoComplete="off"
                    >
                        <option value="all" selected={undefined}>
                            All Layers
                        </option>
                        <option value="textbox">Texts</option>
                        <option value="image">Images</option>
                        <option value="frame">Frames</option>
                        <option value="element">Elements</option>
                        <option value="circle">Circles</option>
                        <option value="ellipse">Ellipses</option>
                        <option value="square">Squares</option>
                        <option value="rectangle">Rectangles</option>
                        <option value="triangle">Triangles</option>
                        <option value="trapezoid">Trapezoids</option>
                        <option value="pentagon">Pentagons</option>
                        <option value="octagon">Octagons</option>
                        <option value="emerald">Emeralds</option>
                        <option value="star">Stars</option>
                        <option value="diamonds">Diamonds</option>
                        <option value="parallelogram">Parallelograms</option>
                        <option value="customShape">Custom Shapes</option>
                    </select>
                    <button
                        id="palleon-layer-delete"
                        className="palleon-btn primary"
                    >
                        <span className="material-icons">delete</span>
                    </button>
                </div>
            </div>
            {/* Right Column END */}
        </>
    );
};

export default RightColumn;
