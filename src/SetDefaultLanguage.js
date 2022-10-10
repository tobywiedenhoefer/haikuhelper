import { env } from "process";
import { Navigate } from "react-router-dom";
import Japanese from "./Japanese";

const SetDefaultLanguage = () => {
  const sysLanguage =
    env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES || "en";
  if (sysLanguage.toUpperCase() === "JP") {
    return <Navigate to={<Japanese />} />;
  } else {
    return <Navigate to="/en" />;
  }
};

export default SetDefaultLanguage;
