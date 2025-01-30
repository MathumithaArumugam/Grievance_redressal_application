import React, { useState } from 'react';

function TrackStatus() {
    // State to manage visibility of grievance history and store the grievance ID
    const [showHistory, setShowHistory] = useState(false);
    const [grievanceId, setGrievanceId] = useState('');

    const handleTrackStatusClick = () => {
        // Get the grievance ID from the input field
        const inputGrievanceId = document.getElementById('grievance-id').value;

        // Set the grievance ID to state and show the grievance history
        setGrievanceId(inputGrievanceId);
        setShowHistory(true);
    };

    return (
        <div className="tab-pane" id="track-status" role="tabpanel" aria-labelledby="track-tab">
            <h2 className="my-4">Track Grievance Status</h2>
            <form action="/track-status" method="GET" className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label htmlFor="grievance-id" className="form-label">Grievance ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="grievance-id"
                        name="grievance-id"
                        required
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleTrackStatusClick}
                >
                    Track Status
                </button>
            </form>

            {/* Conditionally render grievance history */}
            {showHistory && (
                <div id="grievanceHistory" className="mt-4">
                    <h3>Grievance History</h3>
                    <p><strong>Grievance ID:</strong> {grievanceId}</p>
                    <p><strong>Status History:</strong></p>
                    <ul>
                        <li>Initial Submission: Pending</li>
                        <li>Reviewed by Admin: In Progress</li>
                        <li>Resolved: Completed</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TrackStatus;
