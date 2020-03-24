import API_SERVICE from '../../utils/http/http';

export default {
  fetchDatasets: async (data) => {
    try {
      const response = await API_SERVICE.get('/files');
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
