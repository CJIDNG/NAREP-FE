<<<<<<< HEAD
import API_SERVICE from '@Utils/http/http';

export default {
  signupUser: async (data) => {
    try {
      const response = await API_SERVICE.post('/auth/signup', data);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  signinUser: async (data) => {
    try {
      const response = await API_SERVICE.post('/auth/signin', data);
      return response;
    } catch (error) {
      return error.response;
    }
=======
import API_SERVICE from '../../utils/http/http';

export default {
  signupUser: async (data) => {
    const response = await API_SERVICE.post('/auth/signup', data);
    console.log(response);
    return response;
>>>>>>> created component for signup
  }
};
