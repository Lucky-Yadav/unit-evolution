import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../store/auth/action";

const Navbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutsuccess());
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"}>Cart</Link>
          </Box>
          {token ? (
            <Box
              onClick={handlelogout}
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
            >
              Logout
            </Box>
          ) : (
            <Link to="/login">
              <Box style={{ cursor: "pointer" }} sx={{ flexGrow: 0 }}>
                Login
              </Box>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
