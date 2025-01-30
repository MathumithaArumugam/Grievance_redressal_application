import React from 'react';
function Header() {
    return (
        <header className="bg-primary text-white text-center py-4">
            <h1>Grievance Redressal Platform</h1>
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item"><a className="nav-link text-white" href="submit-grievance">Submit
                        Grievance</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="track-status">Track Status</a>
                    </li>
                    <li className="nav-item"><a className="nav-link text-white" href="grievance-list">My Grievances</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
