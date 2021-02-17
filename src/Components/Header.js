import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import GestureIcon from "@material-ui/icons/Gesture";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <GestureIcon/>
        <Typography variant="h6">Canvas para descargar</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header
