const BASE_URL = import.meta.env.VITE_SERVER_URL + 'api';

class AwardsService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/awards`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch awards');
        } catch (error) {
            console.error('Error fetching awards:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/awards/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Award not found');
        } catch (error) {
            console.error('Error fetching award:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${BASE_URL}/awards`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to create award');
        } catch (error) {
            console.error('Error creating award:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/awards/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update award');
        } catch (error) {
            console.error('Error updating award:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/awards/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'Award deleted successfully' };
            }
            throw new Error('Failed to delete award');
        } catch (error) {
            console.error('Error deleting award:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            const response = await fetch(`${BASE_URL}/awards/${id}/visibility`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to toggle award visibility');
        } catch (error) {
            console.error('Error toggling award visibility:', error);
            throw error;
        }
    }
}

export default new AwardsService();
