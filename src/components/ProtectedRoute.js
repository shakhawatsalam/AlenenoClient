import { Navigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils/local-storage";
export const ProtectedRoute = ({ children }) => {
  const user = getFromLocalStorage("accessToken");
  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
