import PrivateRouters from "../Components/PrivateRouters";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Topic from "../pages/Topic";
import Answers from "../pages/Answers";
import Register from "../pages/Register";
export const routers = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        element: <PrivateRouters />,
        children: [
          {
            path: "answers",
            element: <Answers />,
          },
          {
            path: "quiz",
            element: <Quiz />,
          },
          {
            path: "result",
            element: <Result />,
          },
          {
            path: "topic",
            element: <Topic />,
          },
        ],
      },
    ],
  },
];
