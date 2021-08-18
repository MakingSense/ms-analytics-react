/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List as MuiList, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

export const List = (): JSX.Element => {
    const classes = useStyles();
    const { typeID } = useParams<{ typeID: string }>();

    const { isLoading, data } = useQuery('pokemonListByType', () =>
        fetch(`https://pokeapi.co/api/v2/type/${typeID}`).then((res) => res.json()),
    );

    if (isLoading) return <span>Loading...</span>;

    return (
        <>
            <MuiList className={classes.root}>
                {data.pokemon.map((item: { pokemon: { name: string } }) => (
                    <ListItem key={item.pokemon.name}>
                        <Link to={`/${typeID}/${item.pokemon.name}`}>
                            <ListItemText primary={item.pokemon.name} />
                        </Link>
                    </ListItem>
                ))}
            </MuiList>
        </>
    );
};
