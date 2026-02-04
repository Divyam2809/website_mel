const BASE_URL = import.meta.env.VITE_SERVER_URL + 'api';

class CaseStudyService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/case-studies`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch case studies');
        } catch (error) {
            console.error('Error fetching case studies:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/case-studies/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Case study not found');
        } catch (error) {
            console.error('Error fetching case study:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${BASE_URL}/case-studies`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to create case study');
        } catch (error) {
            console.error('Error creating case study:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/case-studies/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update case study');
        } catch (error) {
            console.error('Error updating case study:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/case-studies/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'Case study deleted successfully' };
            }
            throw new Error('Failed to delete case study');
        } catch (error) {
            console.error('Error deleting case study:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            const response = await fetch(`${BASE_URL}/case-studies/${id}/visibility`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to toggle case study visibility');
        } catch (error) {
            console.error('Error toggling case study visibility:', error);
            throw error;
        }
    }
}

export default new CaseStudyService();
