import api from './api';

const globalMomentumService = {
    getConfig: async () => {
        const response = await api.get('/global-momentum');
        return response.data;
    },

    saveConfig: async (config) => {
        const response = await api.post('/global-momentum', config);
        return response.data;
    }
};

export default globalMomentumService;
