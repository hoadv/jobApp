import React, { PropTypes } from 'react'
import './style.css';
import NewJobForm from './new-job-form';

const EmployeerHome = ({submitNewJob}) => {
  let input;
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="active"><a data-toggle="tab" href="#jobDashboard">JOB DASHBOARD</a></li>
        <li><a data-toggle="tab" href="#postJob">POST A JOB</a></li>
        <li><a data-toggle="tab" href="#jobsCart">JOBS CART</a></li>
        <li><a data-toggle="tab" href="#editProfile">EDIT PROFILE</a></li>
        <li><a data-toggle="tab" href="/logout">LOGOUT</a></li>
      </ul>
      <div className="tab-content">
        <div id="jobDashboard" className="tab-pane fade in active">
          <h3>JOB DASHBOARD</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div id="postJob" className="tab-pane fade">
          <h3>POST A JOB</h3>
          <NewJobForm onSubmit={(user) => submitNewJob(user)}/>
        </div>
        <div id="jobsCart" className="tab-pane fade">
          <h3>JOBS CART</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
        <div id="editProfile" className="tab-pane fade">
          <h3>EDIT PROFILE</h3>
          <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
      </div>
    </div>
  )
}

EmployeerHome.propTypes = {
  submitNewJob: PropTypes.func.isRequired
}

export default EmployeerHome