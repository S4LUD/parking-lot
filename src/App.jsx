import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./layout/Root/";
import Dashboard from "./layout/Dashboard/";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Dashboard />} />
        <Route path=":no" element={<Dashboard />} />
        {/* <Route path="time-tracking" element={<TimeTracking />} />
        <Route path="workspace" element={<Workspace />}>
          <Route path="task" element={<Task />} />
          <Route path="member" element={<Member />} />
        </Route> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
