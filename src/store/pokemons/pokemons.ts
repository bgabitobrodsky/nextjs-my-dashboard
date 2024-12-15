import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {
    favorites:{
        [key: string]: SimplePokemon,
    }
}

const getInitialState = ():PokemonsState => {

    //if( typeof localStorage === 'undefined') return {};
    
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    return favorites;
}

const initialState: PokemonsState = {
    favorites: {},
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {

        setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>){
            state.favorites = action.payload;
        },

        toggleFavorite (state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if( !!state.favorites[id] ){
                delete state.favorites[id];
            }else{
                state.favorites[id] = pokemon;
            }
            
        }
    }
});

export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer