import { useRoutes } from "react-router-dom";
import { routers } from "../../routers";

const RouterAll = () => {
  const element = useRoutes(routers);
  return <>{element}</>;
};
export default RouterAll;
