import { Navigate } from "react-router-dom";

const Japanese = () => {
  console.warn(
    "Japanese support is not yet implemented. Redirecting to English page."
  );
  return <Navigate to="/en" />;
};

export default Japanese;
