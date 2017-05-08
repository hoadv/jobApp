import React, { Component } from 'react';
import Job from './job'
import JobService from '../../services/crud-jobs';
import { Link } from 'react-router'
import { JobTypes, JobCategory, Countries } from '../Data/jobs';
const JService = new JobService();

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {},
      isLoaded: false
    };

    JService.getJob(this.props.params.id).then(data => {
      this.setState({ job: data, isLoaded: true })
    })
  }

  render() {
    return (
      <div>
        {!this.state.isLoaded ? 'Loading...' : (
          !this.state.job ? 'Not found' : (
            <div className="container">
              <div className="form-horizontal" >
                <div className="form-group">
                  <label className="control-label col-sm-2" >Job title</label>
                  <div className="col-sm-10">
                    <label className="form-control" id="jobTitle" >{this.state.job.jobTitle}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2"  >Location</label>
                  <div className="col-sm-10">
                    <label className="form-control" id="location">{this.state.job.location}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" >Job Type</label>
                  <div className="col-sm-10">
                    <label className="form-control">{JobTypes[this.state.job.jobType]}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" >Category</label>
                  <div className="col-sm-10">
                    <label className="form-control">{JobCategory[this.state.job.jobCategory]}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" >Description</label>
                  <div className="col-sm-10">
                    <label className="form-control" rows="5">{this.state.job.description}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" >Closing date</label>
                  <div className="col-sm-10">
                    <label id="closingDate">{this.state.job.closingDate}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Country</label>
                  <div className="col-sm-10">
                    <label>{Countries[this.state.job.country]}</label>
                  </div>
                </div>
                <div className="form-group">
                  <h4 className="control-label col-sm-2">Company Details</h4>
                  <div className="col-sm-10">
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2">Company Name</label>
                  <div className="col-sm-10">
                    <label className="form-control" id="companyName" >{this.state.job.companyName}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" >Website</label>
                  <div className="col-sm-10">
                    <label className="form-control" id="website" >{this.state.job.website}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" >Description</label>
                  <div className="col-sm-10">
                    <label class="form-control" rows="5" id="companyDescription" className="form-control">{this.state.job.companyDescription}</label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" for="logo">Logo</label>
                  <div className="col-sm-10">
                    <img src={this.state.job.logo} />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button className="btn btn-info">Apply this job</button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default JobDetail;