// components/RoleRedirect.jsx
import { Navigate } from 'react-router-dom';

const roleRouteMap = {
  admin: '/admin/admin-applications',
  applicant: '/applicants/applicants-applications',
  client: '/client/client-applications',
  employee: '/employees/employees-applications',
  superbank: '/super-bank/super-bank-applications',
};

const RoleRedirect = ({ user }) => {
  if (!user?.isAuthenticated || !user.role || !roleRouteMap[user.role]) {
    return <Navigate to="/" replace />;
  }

  return <Navigate to={roleRouteMap[user.role]} replace />;
};
export default RoleRedirect;
