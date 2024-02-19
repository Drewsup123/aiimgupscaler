const HistoryModal = () => {
    return (
        <div id="modal-history" className="palleon-modal">
            <div className="palleon-modal-close" data-target="#modal-history">
                <span className="material-icons">close</span>
            </div>
            <div className="palleon-modal-wrap">
                <div className="palleon-modal-inner">
                    <div className="palleon-modal-bg">
                        <h3 className="palleon-history-title">
                            History
                            <button
                                id="palleon-clear-history"
                                type="button"
                                className="palleon-btn danger"
                            >
                                <span className="material-icons">clear</span>
                                Clear History
                            </button>
                        </h3>
                        {/* History List - Don't remove ul element */}
                        <ul
                            id="palleon-history-list"
                            className="palleon-template-list"
                            data-max={50}
                        />
                        <p className="palleon-history-count">
                            Showing your last{" "}
                            <span id="palleon-history-count" /> actions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryModal;
