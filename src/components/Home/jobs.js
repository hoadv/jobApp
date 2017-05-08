import React, { Component } from 'react';
import Job from './job'
import JobService from '../../services/crud-jobs';
const JService = new JobService();

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

    JService.getJobs().then(data => {
      this.setState({jobs: data})
    })
  }

  render() {
    return (
      <div>
      <ul className="list-group">
        {
          this.state.jobs.map(job =>
          <Job
            key={job._id}
            job={job}
            />
        )}
    </ul>
      </div>
    );
  }
}

export default Jobs;