import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List } from '../List/List';
import { Detail } from '../Detail/Detail';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
        details: {
            display: 'grid',
            placeItems: 'center',
            width: '100%',
            height: '100vh',
        },
    }),
);

export const Content = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Switch>
            <Route exact path="/:typeID">
                <div className={classes.list}>
                    <List />
                </div>
            </Route>
            <Route exact path="/:typeID/:name">
                <div className={classes.details}>
                    <Detail />
                </div>
            </Route>
        </Switch>
    );
};
