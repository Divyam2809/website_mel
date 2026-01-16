const BASE_URL = '/api/employee-testimonials';

class EmployeeTestimonialService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch employee testimonials');
        } catch (error) {
            console.error('Error fetching employee testimonials:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${BASE_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to create employee testimonial');
        } catch (error) {
            console.error('Error creating employee testimonial:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update employee testimonial');
        } catch (error) {
            console.error('Error updating employee testimonial:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'Deleted successfully' };
            }
            throw new Error('Failed to delete employee testimonial');
        } catch (error) {
            console.error('Error deleting employee testimonial:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            const response = await fetch(`${BASE_URL}/${id}/visibility`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to toggle visibility');
        } catch (error) {
            console.error('Error toggling visibility:', error);
            throw error;
        }
    }
}

export default new EmployeeTestimonialService();
