const BASE_URL = 'http://localhost:3000/api';

class TeamService {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/team`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to fetch team members');
        } catch (error) {
            console.error('Error fetching team members:', error);
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await fetch(`${BASE_URL}/team/${id}`);
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Team member not found');
        } catch (error) {
            console.error('Error fetching team member:', error);
            throw error;
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${BASE_URL}/team`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to create team member');
        } catch (error) {
            console.error('Error creating team member:', error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${BASE_URL}/team/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to update team member');
        } catch (error) {
            console.error('Error updating team member:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${BASE_URL}/team/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                return { message: 'Team member deleted successfully' };
            }
            throw new Error('Failed to delete team member');
        } catch (error) {
            console.error('Error deleting team member:', error);
            throw error;
        }
    }

    async toggleVisibility(id) {
        try {
            const response = await fetch(`${BASE_URL}/team/${id}/visibility`, {
                method: 'PATCH'
            });
            if (response.ok) {
                const result = await response.json();
                return { data: result.data };
            }
            throw new Error('Failed to toggle team visibility');
        } catch (error) {
            console.error('Error toggling team visibility:', error);
            throw error;
        }
    }
}

export default new TeamService();
