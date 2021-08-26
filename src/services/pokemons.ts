export type TPokemonBasic = { name: string; url: string };

export type TPokemonTypeName = {
    pokemon: TPokemonBasic;
    slot: number;
};

export type TPokemon = {
    name: string;
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
    base_experience: string;
    forms: TPokemonBasic[];
    game_indices: {
        game_index: number;
        version: TPokemonBasic;
    }[];
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
    };
    moves: {
        move: TPokemonBasic;
    }[];
    types: {
        slot: number;
        type: TPokemonBasic;
    }[];
};

export const getAllTypes = (): Promise<TPokemonBasic[]> => {
    return fetch('https://pokeapi.co/api/v2/type')
        .then((res) => res.json())
        .then((pokes) => pokes.results);
};

export const getNamesByType = (type: string): Promise<TPokemonTypeName[]> => {
    return fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then((res) => res.json())
        .then((pokes) => pokes.pokemon);
};

export const getPokemon = (name: string): Promise<TPokemon> => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json());
};
