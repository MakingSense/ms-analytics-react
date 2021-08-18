import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import firebase from 'firebase';

export interface IMenuProps {
    menuItems: {
        name: string;
    }[];
}

const drawerWidth = 240;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
    }),
);

export const Menu = ({ menuItems }: IMenuProps): JSX.Element => {
    const classes = useStyles();

    /*     const logEvent = (type: string) => {
        const analytics = firebase.analytics();
        analytics.logEvent('select_content', {
            content_type: 'Pokemon Type',
            content_id: type,
        });
    }; */

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <List>
                {menuItems.map((type: { name: string }) => (
                    <ListItem button key={type.name}>
                        <Link to={`/${type.name}`}>
                            <ListItemText primary={type.name} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
