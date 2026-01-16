# Login & Authentication Documentation

## Overview
The application uses a secure session-based authentication system integrated with a backend API. Sessions are managed using `sessionStorage` to ensure they expire automatically when the browser is closed. `localStorage` is no longer used for active user check, ensuring better security.

## Session Management
- **Storage**: `sessionStorage` (Login data clears on browser close)
- **Token**: JSON Web Token (JWT) is stored in the session and used for API authorization.
- **Legacy Cleanup**: The application automatically removes legacy `localStorage` session details upon login/logout.

## User Roles & Permissions
The system supports Role-Based Access Control (RBAC) with the following roles:

| Role | Access Level |
| :--- | :--- |
| **SuperAdmin** | Full system access, including all content managers and administrative settings. |
| **Content Manager** | Access to content management modules (Blogs, News, Case Studies) and Analytics. |
| **HR** | Restricted access to Careers, Jobs, and Job Applications. |
| **Sales** | Restricted access to Sales/Leads and Demo Queries. |

## Login Credentials (Test/Dev)

Below are the default credentials configured for the development environment.

### 1. Super Admin
* **Email**: `superadmin@melzo.com` (or `admin@melzo.com`)
* **Password**: `superadmin123` (or `admin123` via database seed)
* **Backend Username Map**: `admin`

### 2. Content Manager
* **Email**: `contentmanager@melzo.com`
* **Password**: `contentmanager123`
* **Backend Username**: `contentmanager`

### 3. HR Manager
* **Email**: `hr@melzo.com`
* **Password**: `hr123`
* **Backend Username**: `hr`

### 4. Sales Team
* **Email**: `sales@melzo.com`
* **Password**: `sales123`
* **Backend Username**: `sales`

## Technical Implementation

### Frontend
- **Login Component**: `src/components/admin/AdminLogin.jsx`
- **Auth Service**: `src/services/mockStorage.js` (Method: `login`)
- **Session Check**:
  ```javascript
  // Example of protection in components
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (!user || !user.token) {
      navigate('/admin/login');
  }
  ```

### Backend API
- **Endpoint**: `POST /api/auth/login`
- **Controller**: `e:/mel/backend/controllers/authController.js`
- **Database**: MySQL `users` table.

## Troubleshooting
- **Login Fails**: Ensure the backend server (`e:\mel\backend`) is running (`npm run dev`).
- **Session Persists**: Close the browser tab/window completely to clear `sessionStorage`.
- **401/403 Errors**: Check if the user role allows access to the specific route.
