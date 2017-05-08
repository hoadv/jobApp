import { connect } from 'react-redux'
import EmployeerHome from '../EmployeerHome/'
import JobService from '../../services/crud-jobs';
import Auth from '../../services/auth.service';

const EmpService = new JobService();

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewJob: (user) => {
      user.username = Auth.getUser().username;
      EmpService.saveJob(user);
    }
  }
}

const EmployeerHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeerHome)

export default EmployeerHomeContainer