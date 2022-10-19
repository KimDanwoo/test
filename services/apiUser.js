import axios from 'axios'

const http = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

async function getUserList() {
  return http.get('/data/userList.json')
}

async function putData(id, data) {
  return http.put(`/${id}`, data)
}

async function postData(newData) {
  return http.post('/', newData)
}

const apiUser = {
  getUserList,
  putData,
  postData,
}

export default apiUser
