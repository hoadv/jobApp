import { connect } from 'react-redux'
import Home from '../Home'
import Auth from '../../services/auth.service';
import {receiveJobs} from '../../actions/';

const mapStateToProps = (state) => {
  return {
  }
}

const fetchJobs = (dispatch) => {}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer