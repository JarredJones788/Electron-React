import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import FullscreenTwoToneIcon from '@material-ui/icons/FullscreenTwoTone';
import RemoveIcon from '@material-ui/icons/Remove';

import './topBar.css'

const { ipcRenderer } = window.require('electron');

const useStyles = makeStyles({
    root: {
        background: '#003049',
        height: "44px",
        zIndex: 999
    },
    toolBar: {
        paddingLeft: "0",
        paddingRight: "0",
        minHeight: "44px"
    },
    grow: {
        flexGrow: 1,
    },
    closeBtn: {
        color: 'red'
    },
    fullScreenBtn: {
        color: 'green'
    },
    minimizeBtn: {
        color: 'green'
    },
    title: {
        marginLeft: '1em',
    }
})

interface IProps {
    history: any;
}

export default function TopBar(props: IProps) {
    const classes = useStyles()

    return (
        <AppBar className={`draggable-top-bar ${classes.root}`} position="fixed" elevation={0}>
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" className={classes.title}>
                    My App
                </Typography>
                <div className={classes.grow}></div>
                <IconButton onClick={() => { ipcRenderer.send('app_minimize', null) }} className={`draggable-top-bar-btn ${classes.minimizeBtn}`} >
                    <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => { ipcRenderer.send('app_fullscreen', null) }} className={`draggable-top-bar-btn ${classes.fullScreenBtn}`} >
                    <FullscreenTwoToneIcon />
                </IconButton>
                <IconButton onClick={() => { ipcRenderer.send('app_exit', null) }} className={`draggable-top-bar-btn ${classes.closeBtn}`} >
                    <CancelTwoToneIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
