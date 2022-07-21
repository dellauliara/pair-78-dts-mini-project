import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Detail from "./containers/Detail";
import theme from "./themes/theme";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="/"
              element={
                <ProtectedRoute loginOnly={false}>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="detail/:plan"
            element={
              <ProtectedRoute loginOnly={true}>
                <Detail />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
