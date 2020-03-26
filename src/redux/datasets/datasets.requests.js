import API_SERVICE from '@Utils/http/http';

export default {
  fetchDatasets: async () => {
    try {
      const response = await API_SERVICE.get('/files');
      return response;
    } catch (error) {
      return error.response;
    }
  },
  fetchSectors: async () => {
    try {
      const response = await API_SERVICE.get('/files/sectors');
      return response;
    } catch (error) {
      return error.response;
    }
  },
  fetchSingleDataset: async (slug) => {
    try {
      const response = await API_SERVICE.get(`/files/${slug}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
