import React from 'react'
import SeekerHomeContainer from '../containers/seeker-home'
import EmployeerHomeContainer from '../containers/employeer-home'
import Auth from '../../services/auth.service';

const App = () => (
  <div className="container">
    {Auth.getUser().type == 2 ? <EmployeerHomeContainer /> : <SeekerHomeContainer />}
  </div>
)

export default App