import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List } from '../List/List';
import { Detail } from '../Detail/Detail';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

export const Content = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Switch>
            <Route exact path="/:typeID">
                <div className={classes.content}>
                    <List />
                </div>
            </Route>
            <Route exact path="/:typeID/:name">
                <Detail />
            </Route>
        </Switch>
    );
};
