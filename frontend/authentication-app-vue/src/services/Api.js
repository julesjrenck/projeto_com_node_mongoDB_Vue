import axios from 'axios';

export default () => axios.create({
  // faz a comunicação do front com o back
  baseURL: 'http://localhost:3000/api/v1',
});
