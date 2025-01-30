import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Import SweetAlert2

function GrievanceForm() {
    // Optional: Manage the form state using React state if needed
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        grievanceDescription: '',
        department: '',
        village: '',
        city: '',
        district: ''
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // You can handle form data submission here (e.g., make an API request)
        // For now, let's show the SweetAlert
        Swal.fire({
            title: 'Success!',
            text: 'Your grievance has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Optionally, reset the form after submission
        setFormData({
            name: '',
            email: '',
            grievanceDescription: '',
            department: '',
            village: '',
            city: '',
            district: ''
        });
    };

    return (
        <div className="tab-pane" id="submit-grievance" role="tabpanel" aria-labelledby="submit-tab">
            <h2 className="my-4">Submit Your Grievance</h2>
            <form
                action="/submit-grievance"
                method="POST"
                className="bg-light p-4 rounded shadow-sm"
                onSubmit={handleSubmit} // Add the handleSubmit here
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        required
                        value={formData.name}  // Bind the form state
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Handle input changes
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        value={formData.email}  // Bind the form state
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="grievance-description" className="form-label">Grievance Description:</label>
                    <textarea
                        className="form-control"
                        id="grievance-description"
                        name="grievance-description"
                        rows="4"
                        required
                        value={formData.grievanceDescription}
                        onChange={(e) => setFormData({ ...formData, grievanceDescription: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Select Department:</label>
                    <select
                        className="form-select"
                        id="department"
                        name="department"
                        required
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    >
                        <option value="Public Transport">Public Transport</option>
                        <option value="Public Welfare">Public Welfare</option>
                        <option value="Tamilnadu Electric Board">Tamilnadu Electric Board</option>
                        <option value="Water Board">Water Board</option>
                        <option value="TN Education Department">TN Education Department</option>
                        <option value="I don't know">I don't know</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="village" className="form-label">Village/Taluk:</label>
                    <select
                        className="form-select"
                        id="village"
                        name="village"
                        required
                        value={formData.village}
                        onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    >
                        <option value="Village1">Village 1</option>
                        <option value="Village2">Village 2</option>
                        <option value="Taluk1">Taluk 1</option>
                        <option value="Taluk2">Taluk 2</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <select
                        className="form-select"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    >
                        <option value="Chennai">Chennai</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Salem">Salem</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="district" className="form-label">District:</label>
                    <select
                        className="form-select"
                        id="district"
                        name="district"
                        required
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    >
                        <option value="Chennai">Chennai</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Salem">Salem</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit Grievance</button>
            </form>
        </div>
    );
}

export default GrievanceForm;
