import { PokemonGrid, PokemonsResponse, SimplePokemon } from "../../../pokemons";

export const metadata = {
    title: 'Favoritos',
    description: 'asdfs'
}

export default async function PokemonsPage() {

	return (
		<div className="flex flex-col">
            <span className="text-5xl my-2">Pokémons Favoritos <small>globalState</small></span>
            <PokemonGrid pokemons={[]} />
		</div>
	);
}
