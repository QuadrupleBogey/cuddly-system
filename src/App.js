import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Routes from './containers/routes';
import Header from './components/header';
import SideBar from './components/sidebar';

import Styles from './styles/styles';

const App = ({classes}) => (
  <div className={classes.root}>
    <Header classes={classes}/>
    <SideBar classes={classes}/>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Routes />
    </main>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(App);
