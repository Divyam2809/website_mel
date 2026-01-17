import api from './api';

const dataStripService = {
    getConfig: async () => {
        return await api.get('/data-strip');
    },
    saveConfig: async (config) => {
        return await api.post('/data-strip', config);
    }
};

export default dataStripService;
