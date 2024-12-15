import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {
    [key: string]: SimplePokemon,
}

const getInitialState = ():PokemonsState => {

    if( typeof localStorage === 'undefined') return {};
    
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    return favorites;
}

const initialState: PokemonsState = {
    ...getInitialState()
    //'1': { id: '1', name: 'bulbasaur'},
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite (state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if( !!state[id] ){
                delete state[id];
            }else{
                state[id] = pokemon;
            }
            
        }
    }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer