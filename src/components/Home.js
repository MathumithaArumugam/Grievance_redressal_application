import React from 'react';
function Home() {
    return (
        <div class="container mt-5">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><i class="fas fa-pen-fancy fa-3x"></i></h5>
                <h6 class="card-subtitle mb-2 text-muted">Register Your Grievance</h6>
                <p class="card-text">Submit your grievance quickly and easily to ensure it is addressed by the relevant authorities.</p>
                <a href="/submit-grievance" class="btn btn-primary">Register Now</a>
              </div>
            </div>
          </div>
    
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><i class="fas fa-search fa-3x"></i></h5>
                <h6 class="card-subtitle mb-2 text-muted">Track Your Grievance</h6>
                <p class="card-text">Check the current status of your grievance and stay updated on any progress made.</p>
                <a href="/track-status" class="btn btn-primary">Track Now</a>
              </div>
            </div>
          </div>
    
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><i class="fas fa-list-alt fa-3x"></i></h5>
                <h6 class="card-subtitle mb-2 text-muted">List Your Grievances</h6>
                <p class="card-text">View all the grievances you've submitted in one place to manage them effectively.</p>
                <a href="/grievance-list" class="btn btn-primary">View List</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
