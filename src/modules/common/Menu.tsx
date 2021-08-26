import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { TPokemonBasic } from '../../services/pokemons';

export interface IMenuProps {
    menuItems: TPokemonBasic[];
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
    const history = useHistory();
    const { pathname } = useLocation();

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
                {menuItems.map((type) => (
                    <ListItem
                        key={type.name}
                        button
                        selected={pathname.includes(type.name)}
                        onClick={() => history.push({ pathname: `/${type.name}` })}
                    >
                        <ListItemText primary={type.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};
