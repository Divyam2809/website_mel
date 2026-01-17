const BASE_URL = 'http://localhost:3000/api';

class TestimonialService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/testimonials`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch testimonials');
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/testimonials/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Testimonial not found');
        } catch (error) {
            console.error('Error fetching testimonial:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${BASE_URL}/testimonials`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to create testimonial');
        } catch (error) {
            console.error('Error creating testimonial:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/testimonials/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update testimonial');
        } catch (error) {
            console.error('Error updating testimonial:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/testimonials/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'Testimonial deleted successfully' };
            }
            throw new Error('Failed to delete testimonial');
        } catch (error) {
            console.error('Error deleting testimonial:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            const response = await fetch(`${BASE_URL}/testimonials/${id}/visibility`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to toggle testimonial visibility');
        } catch (error) {
            console.error('Error toggling testimonial visibility:', error);
            throw error;
        }
    }
}

export default new TestimonialService();
