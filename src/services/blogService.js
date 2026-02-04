const BASE_URL = import.meta.env.VITE_SERVER_URL + 'api';

console.log('🔵 BlogService module loaded! BASE_URL:', BASE_URL);

class BlogService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/blogs`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch blogs');
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/blogs/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Blog not found');
        } catch (error) {
            console.error('Error fetching blog:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            console.log('Sending blog creation request:', data);
            const response = await fetch(`${BASE_URL}/blogs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log('Blog creation response:', result);

            if (response.ok) {
                return { data: result.data };
            }

            throw new Error(result.error || 'Failed to create blog');
        } catch (error) {
            console.error('Error creating blog:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/blogs/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update blog');
        } catch (error) {
            console.error('Error updating blog:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/blogs/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'Blog deleted successfully' };
            }
            throw new Error('Failed to delete blog');
        } catch (error) {
            console.error('Error deleting blog:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            console.log('🔄 Toggling visibility for blog ID:', id);
            const response = await fetch(`${BASE_URL}/blogs/${id}/visibility`, {
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
            throw new Error(error.error || 'Failed to toggle blog visibility');
        } catch (error) {
            console.error('Error toggling blog visibility:', error);
            throw error;
        }
    }
}

export default new BlogService();
