import React, { PropTypes } from 'react'
import Header from './header'
import Jobs from './jobs'

const Home = ({jobs}) => {
  return (
    <div>
      <Header />
      <Jobs />
    </div>
  )
}

Home.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    jobTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default Home