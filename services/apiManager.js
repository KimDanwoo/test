import axios from 'axios'

const http = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

async function getManagerList() {
  return http.get('/data/managerList.json')
}

const apiManager = {
  getManagerList,
}

export default apiManager
