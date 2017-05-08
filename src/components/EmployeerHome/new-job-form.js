import React, { PropTypes } from 'react'
import './style.css';
let input;
const NewJobForm = ({onSubmit}) => {
  let input = {}
  let user = {}
  return (
    <div>
      <form className="form-horizontal" onSubmit={e => {
          e.preventDefault()
          Object.keys(input).map((key) => {
            user[key] = input[key].value
            if (key === 'jobType' || key === 'category' || key === 'country') {
              input[key].value = 1
            } else {
              input[key].value = ''
            }
          })

          onSubmit(user)
        }}>
        <div className="form-group">
          <label className="control-label col-sm-2" for="email">Your email</label>
          <div className="col-sm-10">
            <input type="email" ref={node => {
            input.email = node
          }} className="form-control" id="email" placeholder="you@yourdomain.com" name="email" required/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="jobTitle">Job title</label>
          <div className="col-sm-10">
            <input ref={node => {
            input.jobTitle = node
          }} type="text" className="form-control" id="jobTitle" name="jobTitle" />
          </div>
        </div>
         <div className="form-group">
          <label className="control-label col-sm-2" for="location" placeholder="London">Location</label>
          <div className="col-sm-10">
            <input ref={node => {
            input.location = node
          }} type="text" className="form-control" id="location" name="location" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="jobType">Job Type</label>
          <div className="col-sm-10">
             <select ref={node => {
            input.jobType = node
          }} className="form-control col-sm-10" id="jobType" name="jobType">
              <option value="1">Full Time</option>
              <option value="2">Parttime</option>
            </select>
          </div>
        </div>
         <div className="form-group">
          <label className="control-label col-sm-2" for="category">Category</label>
          <div className="col-sm-10">
            <select ref={node => {
            input.category = node
          }} className="form-control col-sm-10" id="category"  name="category">
                <option value="1">IT</option>
                <option value="2">Others</option>
            </select>
          </div>
        </div>
         <div className="form-group">
          <label className="control-label col-sm-2" for="description">Description</label>
          <div className="col-sm-10">
            <textarea ref={node => {
            input.description = node
          }} class="form-control" rows="5" id="description" name="description" className="col-sm-10"></textarea>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="closingDate">Closing date</label>
          <div className="col-sm-10">
            <input ref={node => {
            input.closingDate = node
          }} type="text" className="form-control" id="closingDate" placeholder="yyyy-mm-dd" name="closingDate" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="category">Country</label>
          <div className="col-sm-10">
            <select ref={node => {
            input.country = node
          }} className="form-control col-sm-10" id="country"  name="country">
                <option value="1">USA</option>
                <option value="2">Vietnam</option>
            </select>
          </div>
        </div>
         <div className="form-group">
          <h4 className="control-label col-sm-2">Company Details</h4>
          <div className="col-sm-10">
          </div>
        </div>
         <div className="form-group">
          <label className="control-label col-sm-2" for="companyName">Company Name</label>
          <div className="col-sm-10">
            <input ref={node => {
            input.companyName = node
          }} type="text" className="form-control" id="companyName" name="companyName" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="website">Website</label>
          <div className="col-sm-10">
            <input ref={node => {
            input.website = node
          }} type="text" className="form-control" id="website" name="website" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" for="companyDescription">Description</label>
          <div className="col-sm-10">
            <textarea ref={node => {
            input.companyDescription = node
          }} class="form-control" rows="5" id="companyDescription" name="companyDescription" className="col-sm-10"></textarea>
          </div>
        </div>
         <div className="form-group">
          <label className="control-label col-sm-2" for="logo">Logo</label>
          <div className="col-sm-10">
            <input ref={node => {
            input.logo = node
          }} type="file" className="form-control" id="logo" name="logo" accept="image/*" />
          </div>
        </div>
        <div className="form-group">        
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-info">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

NewJobForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default NewJobForm