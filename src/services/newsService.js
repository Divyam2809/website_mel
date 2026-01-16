const BASE_URL = 'http://localhost:3000/api';

class NewsService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/news`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch news');
        } catch (error) {
            console.error('Error fetching news:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/news/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch news item');
        } catch (error) {
            console.error('Error fetching news item:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            console.log('Sending news creation request:', data);
            const response = await fetch(`${BASE_URL}/news`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            const error = await response.json();
            throw new Error(error.error || 'Failed to create news');
        } catch (error) {
            console.error('Error creating news:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/news/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update news');
        } catch (error) {
            console.error('Error updating news:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/news/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'News deleted successfully' };
            }
            throw new Error('Failed to delete news');
        } catch (error) {
            console.error('Error deleting news:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            console.log('🔄 Toggling visibility for news ID:', id);
            const response = await fetch(`${BASE_URL}/news/${id}/visibility`, {
                method: 'PATCH'
            });
            console.log('Toggle response status:', response.status);
            if (response.ok) {
                const result = await response.json();
                console.log('Toggle successful:', result);
                return { data: result.data };
            }
            const error = await response.json();
            console.error('Toggle failed:', error);
            throw new Error(error.error || 'Failed to toggle news visibility');
        } catch (error) {
            console.error('Error toggling news visibility:', error);
            throw error;
        }
    }
}

export default new NewsService();
