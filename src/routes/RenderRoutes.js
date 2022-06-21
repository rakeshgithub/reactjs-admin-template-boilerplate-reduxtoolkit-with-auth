import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";

export function RenderRoutes({ routes }) {
  return (
    <Routes>
      <Route
        key={"ROOT"}
        path={"/"}
        exact={true}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route key={"LOGIN"} path={"/login"} exact={true} element={<Login />} />

      <Route
        key={"APP"}
        path={"/app"}
        exact={false}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route component={() => <h1>Not Found!</h1>} path="/not-found" />
    </Routes>
  );
}
