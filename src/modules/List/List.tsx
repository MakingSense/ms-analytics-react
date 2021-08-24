/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useHistory } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List as MuiList, ListItemText, Paper } from '@material-ui/core';
import { getNamesByType } from '../../services/pokemons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.default,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 160px)',
            gridAutoRows: '100px',
            gridGap: '12px',
        },
        item: {
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
        },
    }),
);

export const List = (): JSX.Element => {
    const classes = useStyles();
    const { typeID } = useParams<{ typeID: string }>();
    const history = useHistory();

    const { isLoading, data, error } = useQuery(`pokemonList_by_type_${typeID}`, () =>
        getNamesByType(typeID),
    );

    if (isLoading) return <span>Loading...</span>;
    if (!data || error) return <span>error fetching pokemon type names...</span>;
    return (
        <MuiList className={classes.root}>
            {data.map((item: { pokemon: { name: string } }) => (
                <Paper
                    onClick={() => history.push({ pathname: `/${typeID}/${item.pokemon.name}` })}
                    key={item.pokemon.name}
                    className={classes.item}
                >
                    <ListItemText primary={item.pokemon.name} />
                </Paper>
            ))}
        </MuiList>
    );
};
