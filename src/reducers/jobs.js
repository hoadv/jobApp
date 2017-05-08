const jobs = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_JOBS':
      return state
    case 'RECEIVE_JOBS':
      return action.jobs;
    default:
      return state
  }
}

export default jobs