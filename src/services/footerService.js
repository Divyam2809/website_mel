import api from './api';

const footerService = {
    // Get footer configuration
    getFooterConfig: async () => {
        const response = await api.get('/footer');
        return response.data;
    },

    // Update footer configuration
    saveFooterConfig: async (config) => {
        const response = await api.post('/footer', config);
        return response.data;
    }
};

export default footerService;
