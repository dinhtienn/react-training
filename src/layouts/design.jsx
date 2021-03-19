import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Drawer, List, ListItem} from '@material-ui/core';
import {Link} from "react-router-dom";
import {AccountCircle, ArrowBack, HomeRounded, Work, BrandingWatermark, WorkOutlineSharp, GroupWork, SpeakerGroup} from '@material-ui/icons';
import '../assets/css/style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Design() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    left: false,
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="header no-box-shadow">
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="primary"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            Management
          </IconButton>
          <div className={classes.root} />
          <Link to='/main/home'>
            <Button color="primary">Home</Button>
          </Link>
          <Button color="primary">About</Button>
          <div>
            <IconButton
              color="primary"
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link className='text-black' to='/main/profile'>
                <StyledMenuItem>
                  <ListItemIcon>
                    <AccountCircle fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </StyledMenuItem>
              </Link>
              <Link className='text-black' to='/sign-in'>
                <StyledMenuItem>
                  <ListItemIcon>
                    <ArrowBack fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </StyledMenuItem> 
              </Link>
            </StyledMenu>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </div>
    </div>
  );
}
