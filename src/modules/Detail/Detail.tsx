import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Collapse,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {},
    }),
);

export const Detail = (): JSX.Element => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // eslint-disable-next-line prefer-const
    let { name } = useParams<{ name: string }>();

    const { isLoading, data } = useQuery('pokemonDetail', () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json()),
    );

    if (isLoading) return <span>Loading...</span>;

    const TypeList = () => {
        return (
            <span>
                {data.types.map((type: { type: { name: string } }) => (
                    <span key={type.type.name}>{type.type.name}</span>
                ))}
                ;
            </span>
        );
    };

    return (
        <main>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src={data.sprites.front_shiny} alt={data.name} />
                        </Avatar>
                    }
                    title={data.name}
                    subheader={<TypeList />}
                    action={
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    }
                />
                <CardMedia
                    className={classes.media}
                    image={data.sprites.front_default}
                    title={data.name}
                />
                <CardContent>
                    <Typography variant="h6" color="textSecondary">
                        Abilities
                    </Typography>
                    <List>
                        {data.abilities.map((ability: { ability: { name: string } }) => (
                            <ListItem key={ability.ability.name}>
                                <ListItemText primary={ability.ability.name} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <CardActions disableSpacing>
                    <Typography variant="h6" color="textSecondary">
                        Moves
                    </Typography>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <List>
                            {data.moves.map((move: { move: { name: string } }) => (
                                <ListItem key={move.move.name}>
                                    <ListItemText primary={move.move.name} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Collapse>
            </Card>
        </main>
    );
};
