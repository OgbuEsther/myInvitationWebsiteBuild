import React from "react";
import { useRoutes } from "react-router-dom";
import My_Hero from "./Hero/My_Hero";

import Register from "./Register";
import Submit from "./Submit";

const Allroutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <My_Hero />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/submit",
      element: <Submit />,
    },
  ]);
  return element;
};

export default Allroutes;
