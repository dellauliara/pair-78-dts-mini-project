import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { Button } from "@mui/material";
import logo from "../img/image 3.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const onLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onLogin = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
             
                <img src={logo} alt="" className="gambar" />
              
            </Link>
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ padding: 1 }}>
              {!user ? (
                <Button variant="contained" onClick={onLogin}>
                  Login
                </Button>
              ) : (
                <Button variant="contained" onClick={onLogout}>
                  Logout
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
