import React from "react";
import DataTable from "react-data-table-component";

// Sample grievance data
const grievanceData = [
    { id: "G12345", name: "ராஜ் குமார்", category: "Service Issue", status: "Resolved", lastUpdated: "2025-01-25 12:30 PM", department: "Public Transport", location: "Chennai" },
    { id: "G12346", name: "சித்ரா பாண்டியன்", category: "Product Issue", status: "In Progress", lastUpdated: "2025-01-20 09:00 AM", department: "Public Welfare", location: "Madurai" },
    { id: "G12347", name: "பாலா சுந்தரேசன்", category: "Other", status: "Pending", lastUpdated: "2025-01-18 11:45 AM", department: "Tamilnadu Electric Board", location: "Coimbatore" },
    { id: "G12348", name: "அருண் அய்யர்", category: "Service Issue", status: "Resolved", lastUpdated: "2025-01-15 03:30 PM", department: "Water Board", location: "Trichy" },
    { id: "G12349", name: "சுகா ரவீந்திரன்", category: "Product Issue", status: "In Progress", lastUpdated: "2025-01-10 01:15 PM", department: "TN Education Department", location: "Salem" },
    { id: "G12350", name: "ரேவதி கிருஷ்ணன்", category: "Other", status: "Pending", lastUpdated: "2025-01-09 10:00 AM", department: "Public Transport", location: "Madurai" },
    { id: "G12351", name: "தர்மலிங்கம் சேகர்", category: "Service Issue", status: "Resolved", lastUpdated: "2025-01-06 02:30 PM", department: "Public Welfare", location: "Chennai" },
    { id: "G12352", name: "நிவேதா பாலன்", category: "Product Issue", status: "In Progress", lastUpdated: "2025-01-05 11:45 AM", department: "Tamilnadu Electric Board", location: "Coimbatore" },
    { id: "G12353", name: "அலெக்சா பிரபாகர்", category: "Other", status: "Pending", lastUpdated: "2025-01-03 09:00 AM", department: "Water Board", location: "Madurai" },
    { id: "G12354", name: "சுரேஷ் குமார்", category: "Service Issue", status: "Resolved", lastUpdated: "2025-01-02 05:30 PM", department: "TN Education Department", location: "Trichy" },
    { id: "G12355", name: "ராஜா வினோத்", category: "Product Issue", status: "In Progress", lastUpdated: "2025-01-01 12:00 PM", department: "Public Welfare", location: "Chennai" },
];

// Define table columns
const columns = [
    { name: "Grievance ID", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
        cell: (row) => (
            <span
                className={
                    row.status === "Resolved"
                        ? "text-green-500 font-semibold"
                        : row.status === "In Progress"
                            ? "text-yellow-500 font-semibold"
                            : "text-blue-500 font-semibold"
                }
            >
        {row.status}
      </span>
        ),
    },
    { name: "Last Updated", selector: (row) => row.lastUpdated, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    { name: "Location", selector: (row) => row.location, sortable: true },
];

const GrievanceList = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Grievance List</h2>
            <p className="mb-4">Here’s a list of all grievances and their current status:</p>
            <DataTable
                columns={columns}
                data={grievanceData}
                pagination
                highlightOnHover
                striped
                showGridlines
            />
        </div>
    );
};

export default GrievanceList;
