import React from 'react';
import { useQuery } from 'react-query';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Menu } from './Menu';
import { Content } from './Content';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        },
    }),
);

export const Container = (): JSX.Element => {
    const classes = useStyles();
    const { isLoading, data } = useQuery('typeList', () =>
        fetch('https://pokeapi.co/api/v2/type').then((res) => res.json()),
    );

    if (isLoading) return <span>Loading...</span>;
    return (
        <div className={classes.root}>
            <Menu menuItems={data.results} />
            <Content />
        </div>
    );
};
