import * as React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "react-router-dom";

// import Slide from "@mui/material/Slide";

import PopupOpenButton from "../PopupOpenButton/PopupOpenButton";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

// export default function HideAppBar(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar
//           className="AppBar"
//           sx={{
//             bgcolor: "green",
//           }}
//         >
//           <Toolbar>
//             <Typography variant="h6" component="div">
//               <nav className="navigates">
//                 <Link className="link" to={`/items`}>
//                   Characters
//                 </Link>
//                 <Link className="link" to={`/`}>
//                   Main
//                 </Link>
//               </nav>
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar />
//     </React.Fragment>
//   );
// }

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          bgcolor: "green",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link className="link" to={`/items`}>
              Characters
            </Link>
            <Link className="link" to={`/`}>
              Main
            </Link>
            <Link className="link" to={`/`}>
              <PopupOpenButton />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="success" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
