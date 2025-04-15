import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'

const response = await axios.get('/api/produce');
console.log(response);
response.data.forEach(item => console.log(item.name));

axios.get('/api/produce')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });

axios.get('/api/produce', {
  params: {
    category: 'fruit'
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
