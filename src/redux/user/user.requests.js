import API_SERVICE from '../../utils/http/http';

export default {
  signupUser: async (data) => {
    const response = await API_SERVICE.post('/auth/signup', data);
    console.log(response);
    return response;
  }
};
