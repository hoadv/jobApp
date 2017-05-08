import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Header = ({}) => (
  <div className="row">
    <div className="col-sm-6">
      <Link to='employeer'>Login as Employeer</Link>
    </div>
    <div className="col-sm-6">
      <Link to='employeer'>Login as Job Seeker</Link>
    </div>
  </div>
)


export default Header