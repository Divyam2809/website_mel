const BASE_URL = import.meta.env.VITE_SERVER_URL + 'api';

class FaqService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/faqs`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch faqs');
        } catch (error) {
            console.error('Error fetching faqs:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/faqs/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('FAQ not found');
        } catch (error) {
            console.error('Error fetching faq:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${BASE_URL}/faqs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to create faq');
        } catch (error) {
            console.error('Error creating faq:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/faqs/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update faq');
        } catch (error) {
            console.error('Error updating faq:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/faqs/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'FAQ deleted successfully' };
            }
            throw new Error('Failed to delete faq');
        } catch (error) {
            console.error('Error deleting faq:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            const response = await fetch(`${BASE_URL}/faqs/${id}/visibility`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to toggle faq visibility');
        } catch (error) {
            console.error('Error toggling faq visibility:', error);
            throw error;
        }
    }
}

export default new FaqService();
