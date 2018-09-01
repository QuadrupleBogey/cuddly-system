import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Styles from '../styles/styles';

const header = ({classes}) => (
    <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
            <Typography variant="title" color="inherit">
                Cuddly Cloud
            </Typography>
        </Toolbar>
    </AppBar>
);

header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(header);