let instance = null;
const apiUrl = '/api/jobs';

export default class JobService {
  getJobs() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getJob(id) {
    return fetch(apiUrl + '/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveJob(job) {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
    .catch((error) => {
        console.error(error);
      });
  }
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }
}