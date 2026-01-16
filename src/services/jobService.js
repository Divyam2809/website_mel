import api from './api';

const jobService = {
    getAllJobs: async () => {
        const response = await api.get('/jobs');
        return response.data;
    },

    getJobById: async (id) => {
        const response = await api.get(`/jobs/${id}`);
        return response.data;
    },

    createJob: async (data) => {
        const response = await api.post('/jobs', data);
        return response.data;
    },

    updateJob: async (id, data) => {
        const response = await api.put(`/jobs/${id}`, data);
        return response.data;
    },

    deleteJob: async (id) => {
        const response = await api.delete(`/jobs/${id}`);
        return response.data;
    },

    toggleJobVisibility: async (id) => {
        const response = await api.patch(`/jobs/${id}/visibility`);
        return response.data;
    },

    getApplications: async () => {
        const response = await api.get('/job-applications');
        return response.data;
    },

    getApplicationsByJob: async (jobId) => {
        const response = await api.get(`/jobs/${jobId}/applications`);
        return response.data;
    },

    createApplication: async (data) => {
        const response = await api.post('/job-applications', data);
        return response.data;
    },

    updateApplicationStatus: async (id, status) => {
        const response = await api.put(`/job-applications/${id}/status`, { status });
        return response.data;
    },

    deleteApplication: async (id) => {
        const response = await api.delete(`/job-applications/${id}`);
        return response.data;
    }
};

export default jobService;
