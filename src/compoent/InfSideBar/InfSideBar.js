import React from "react";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

// import "./InfSideBar.css";

// class InfSideBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }
//   render() {
//     return (
//       <div className="InfoLine">
//         <ul>
//           <li>
//             <button className="Img Inf Link button"></button>
//             <p>music</p>
//           </li>
//           <li>
//             <button className="Img Inf Link button Persons"></button>
//             <p>персонажи</p>
//           </li>
//           <li>
//             <button className="Img Inf Link  button"></button>
//             <p>music</p>
//           </li>
//           <li>
//             <button className="Img Inf Link  button"></button>
//             <p>music</p>
//           </li>
//           <li>
//             <button className="Img Inf Link  button"></button>
//             <p>music</p>
//           </li>
//           <li>
//             <button className="Img Inf Link  button"></button>
//             <p>music</p>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default InfSideBar;
