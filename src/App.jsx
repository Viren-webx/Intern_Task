import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Page/Login";
import Projects from "./Page/Projects";
import DPRForm from "./Page/DPRForm";
import AuthProvider, { useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          />

          <Route
            path="/dpr"
            element={
              <PrivateRoute>
                <DPRForm />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;