import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import './App.css';
import Sidenav, { Widget } from './components/sideNav/sideNav';
import TopBar from './components/topBar/topBar';
import Home from './pages/home/home';
import Settings from './pages/settings/settings';

//icons
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';




const useStyles = makeStyles(() => ({
  content: {
    padding: "1em",
    marginTop: "44px",
    marginLeft: "60px",
    position: "relative",
  },
}));

export default function App() {
  const classes = useStyles()

  const navButtons: Widget[] = [
    {
      icon: <HomeTwoToneIcon style={{ color: "green" }} />,
      toolTip: "Home",
      location: "/home"
    },
    {
      icon: <SettingsTwoToneIcon style={{ color: "green" }} />,
      toolTip: "Settings",
      location: "/settings"
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Route render={(props: any) => <TopBar history={props.history} />} />
        <Route render={(props) => <Sidenav widgets={navButtons} history={props.history} />} />
        <div className={classes.content}>
          <Switch>
            <Route path="/home" render={(props: any) => <Home history={props.history} />} exact />
            <Route path="/settings" render={(props: any) => <Settings history={props.history} />} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
