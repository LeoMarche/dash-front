import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MovieIcon from '@mui/icons-material/Movie';
import LabelIcon from '@mui/icons-material/Label';
import Link from 'next/link';

const drawerWidth = 240;

type VariableIconProps = {
  name: string
}

type VariableIconState = {

}

class VariableIcon extends React.Component<VariableIconProps, VariableIconState> {
  render() {
    if(this.props.name === "inbox") {
      return <InboxIcon />;
    } else if(this.props.name === "movie") {
      return <MovieIcon />;
    } else if(this.props.name === "label") {
      return <LabelIcon />;
    }
  }
}

type NavigationProps = {
  items: string[],
  icons: string[],
  urls: string[]
}

type NavigationState = {

}

export default class Navigation extends React.Component<NavigationProps, NavigationState> {
  render() {
    return (
      <Box component="div" width="10vw" sx={{ flexGrow: 1, p: 3 }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Yolov5 Realtime Demo
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {this.props.items.map((text, index) => (
                <Link key={index} href={this.props.urls[index]}>
                  <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <VariableIcon name={this.props.icons[index]} />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    );
  }
}