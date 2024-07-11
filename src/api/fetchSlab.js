const axios = require('axios')

const fetchSlabs = async () => {
  return axios
    .get('/api/lumber')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default fetchSlabs
