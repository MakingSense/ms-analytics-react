import React from 'react';
import { useQuery } from 'react-query';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Menu } from './Menu';
import { Content } from './Content';
import { getAllTypes } from '../../services/pokemons';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        },
    }),
);

export const Container = (): JSX.Element => {
    const classes = useStyles();
    const { isLoading, data, error } = useQuery('typeList', () => getAllTypes());

    if (isLoading) return <span>Loading...</span>;
    if (!data || error) return <span>error fetching pokemon types...</span>;
    return (
        <div className={classes.root}>
            <Menu menuItems={data} />
            <Content />
        </div>
    );
};
