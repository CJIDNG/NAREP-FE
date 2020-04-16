import API_SERVICE from '@Utils/http/http';

export default {
  deletePolicyPaper: async ({ slug }) => {
    try {
      console.log('click');
      const response = await API_SERVICE.delete(`/policy-paper/${slug}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};
