import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Drawer, Button, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {HomeRounded, Work, BrandingWatermark, WorkOutlineSharp, GroupWork, SpeakerGroup} from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Home">
          <ListItemIcon><HomeRounded /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="Company">
          <ListItemIcon><Work /></ListItemIcon>
          <ListItemText primary="Company" />
        </ListItem>
        <ListItem button key="Branch">
          <ListItemIcon><BrandingWatermark /></ListItemIcon>
          <ListItemText primary="Branch" />
        </ListItem>
        <ListItem button key="Devision">
          <ListItemIcon><WorkOutlineSharp /></ListItemIcon>
          <ListItemText primary="Devision" />
        </ListItem>
        <ListItem button key="Project">
          <ListItemIcon><GroupWork /></ListItemIcon>
          <ListItemText primary="Project" />
        </ListItem>
        <ListItem button key="Human Resource">
          <ListItemIcon><SpeakerGroup /></ListItemIcon>
          <ListItemText primary="Human Resource" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
