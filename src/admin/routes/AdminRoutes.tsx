import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AdminRoutes = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path="login"
        element={!user ? <Login /> : <Navigate to="/admin/dashboard" />}
      />
      <Route
        path="dashboard"
        element={user ? <Dashboard /> : <Navigate to="/admin/login" />}
      />
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default AdminRoutes;
