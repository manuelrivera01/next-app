import { PokemonClient } from 'pokenode-ts';

import { prisma } from '../src/backend/utils/prisma';

const doBackfill = async () => {
  const pokeApi = new PokemonClient();

  const allPokemon = await pokeApi.listPokemons(0, 493);

  const formattedPokemon = allPokemon.results.map((p, index) => ({
    id: index + 1,
    name: (p as { name: string }).name,
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));

  const creation = await prisma.pokemon.createMany({
    data: [
      {
        id: 1,
        name: 'Venecia',
        spriteUrl:
          'https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224_960_720.jpg',
      },
      {
        id: 2,
        name: 'Londres',
        spriteUrl:
          'https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg',
      },
      {
        id: 3,
        name: 'Roma',
        spriteUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/15/39/colosseum-792202_960_720.jpg',
      },
      {
        id: 4,
        name: 'Rio de Janeiro',
        spriteUrl:
          'https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_960_720.jpg',
      },
      {
        id: 5,
        name: 'New York',
        spriteUrl:
          'https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520_960_720.jpg',
      },
      {
        id: 6,
        name: 'Tokyo',
        spriteUrl:
          'https://cdn.pixabay.com/photo/2020/01/14/03/53/tokyo-4763976_960_720.jpg',
      },
    ],
  });

  console.log('Creation?', creation);
};

doBackfill();
