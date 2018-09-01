import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HistoryIcon from '@material-ui/icons/History';

import Styles from '../styles/styles';

const sidebar = ({classes}) => (
    <Drawer
        variant="permanent"
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <List>
            <ListItem button>
                <ListItemText primary="Upload"/>
                <ListItemIcon>
                    <CloudUploadIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Previous Results"/>
                <ListItemIcon>
                    <HistoryIcon />
                </ListItemIcon>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Account"/>
                <ListItemIcon>
                    <PersonIcon/>
                </ListItemIcon>
            </ListItem>
        </List>
        <Divider />
    </Drawer>
);

sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(sidebar);