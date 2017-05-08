import { connect } from 'react-redux'
import SeekerHome from '../SeekerHome/'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const SeekerHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeekerHome)

export default SeekerHomeContainer