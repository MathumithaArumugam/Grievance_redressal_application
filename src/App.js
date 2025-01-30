import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import GrievanceForm from './components/GrievanceForm';
import TrackStatus from './components/TrackStatus';
import GrievanceList from './components/GrievanceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    return (
        <Router>
            <Header/>
            <div className="container mt-4">
                <div className="mb-4">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/submit-grievance" element={<GrievanceForm/>}/>
                        <Route path="/track-status" element={<TrackStatus/>}/>
                        <Route path="/grievance-list" element={<GrievanceList/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </Router>
    );
}

export default App;
