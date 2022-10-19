import axios from 'axios'

const http = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

async function getCompanyList() {
  return http.get('/data/companyCodeList.json')
}

async function putData(id, data) {
  return http.put(`/${id}`, data)
}

async function postData(newData) {
  return http.post('/', newData)
}

const apiCompany = {
  getCompanyList,
  putData,
  postData,
}

export default apiCompany
