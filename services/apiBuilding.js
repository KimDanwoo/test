import axios from 'axios'

const http = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

async function getBuildingList() {
  return http.get('/data/buildingCodeList.json')
}

async function putData(id, data) {
  return http.put(`/${id}`, data)
}

async function postData(newData) {
  return http.post('/', newData)
}

const apiBuilding = {
  getBuildingList,
  putData,
  postData,
}

export default apiBuilding
