import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomLoading from './components/shared/small/CustomLoading';
import ProtectedRoute from './components/ProtectedRoute';
import RoleRedirect from './components/RoleRedirect';
import AdminDashboard from './page/admin/dashboard';
import AdminApplications from './page/admin/dashboard/admin-dashboard/AdminApplications';

// Lazy components
const Login = lazy(() => import('./page/auth/Login'));
const Otp = lazy(() => import('./page/auth/Otp'));

const ApplicantsDashboard = lazy(() => import('./page/applicants/dashboard'));
const ApplicantsApplications = lazy(
  () => import('./page/applicants/dashboard/applicants-applications/ApplicantsApplications')
);

const ClientDashboard = lazy(() => import('./page/client/dashboard'));
const ClientApplications = lazy(() => import('./page/client/dashboard/client-applications/ClientApplications'));

const EmployeeDashboard = lazy(() => import('./page/employees/dashboard'));
const EmployeesApplications = lazy(
  () => import('./page/employees/dashboard/employees-applications/EmployeesApplications')
);

const SuperBankDashboard = lazy(() => import('./page/superBank/dashboard'));
const SuperBankApplications = lazy(
  () => import('./page/superBank/dashboard/super-Bank-applications/SuperBankApplications')
);

const user = {
  isAuthenticated: true, // true or false
  role: 'admin', // try null, undefined, or wrong role to test role are (applicant, client, employee, superbank)
};

function App() {
  return (
    <Suspense fallback={<CustomLoading />}>
      <Routes>
        {/* Public Routes (unauthenticated only) */}
        {!user?.isAuthenticated && <Route path="/" element={<Login />} />}
        {!user?.isAuthenticated && <Route path="/otp" element={<Otp />} />}

        {/* Authenticated users trying to access public routes */}
        {user?.isAuthenticated && <Route path="/" element={<RoleRedirect user={user} />} />}
        {user?.isAuthenticated && <Route path="/otp" element={<RoleRedirect user={user} />} />}

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute user={user} role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="admin-applications" element={<AdminApplications />} />
        </Route>
        <Route
          path="/applicants/*"
          element={
            <ProtectedRoute user={user} role="applicant">
              <ApplicantsDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="applicants-applications" element={<ApplicantsApplications />} />
        </Route>

        <Route
          path="/client/*"
          element={
            <ProtectedRoute user={user} role="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="client-applications" element={<ClientApplications />} />
        </Route>

        <Route
          path="/employees/*"
          element={
            <ProtectedRoute user={user} role="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="employees-applications" element={<EmployeesApplications />} />
        </Route>

        <Route
          path="/super-bank/*"
          element={
            <ProtectedRoute user={user} role="superbank">
              <SuperBankDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="super-bank-applications" element={<SuperBankApplications />} />
        </Route>

        <Route path="*" element={<RoleRedirect user={user} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
