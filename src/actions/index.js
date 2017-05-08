const RECEIVE_POSTS = 'RECEIVE_JOBS'
export const receiveJobs = (jobs) => {
  return {
    type: RECEIVE_POSTS,
    jobs: jobs
  }
}