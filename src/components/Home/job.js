import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Job = ({ job }) => (
  <li href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="row">
      <div className="col-sm-1">
        <img src="" />
      </div>
      <div className="col-sm-9">
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{job.jobTitle}</h4>
          </div>
          <p className="mb-1">{job.description}</p>
      </div>
      <div className="col-sm-2">
        <Link to={"jobdetail/" + job._id} params={{id: job._id}} className="btn btn-info">View Detail</Link>
      </div>
      </div>
  </li>
)

Job.propTypes = {}

export default Job