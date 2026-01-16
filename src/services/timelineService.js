const BASE_URL = 'http://localhost:3000/api';

class TimelineService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/timeline`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch timeline');
        } catch (error) {
            console.error('Error fetching timeline:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/timeline/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Timeline item not found');
        } catch (error) {
            console.error('Error fetching timeline item:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${BASE_URL}/timeline`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to create timeline item');
        } catch (error) {
            console.error('Error creating timeline item:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/timeline/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update timeline item');
        } catch (error) {
            console.error('Error updating timeline item:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/timeline/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'Timeline item deleted successfully' };
            }
            throw new Error('Failed to delete timeline item');
        } catch (error) {
            console.error('Error deleting timeline item:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            const response = await fetch(`${BASE_URL}/timeline/${id}/visibility`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to toggle timeline visibility');
        } catch (error) {
            console.error('Error toggling timeline visibility:', error);
            throw error;
        }
    }
}

export default new TimelineService();
