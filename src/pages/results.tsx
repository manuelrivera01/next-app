import type { GetServerSideProps } from 'next';
import { prisma } from '@/backend/utils/prisma';
import { AsyncReturnType } from '@/utils/ts-bs';

import Image from 'next/image';
import Head from 'next/head';

const getPokemonInOrder = async () => {
  return await prisma.pokemon.findMany({
    orderBy: {
      VoteFor: { _count: 'desc' },
    },
    select: {
      id: true,
      name: true,
      spriteUrl: true,
      _count: {
        select: {
          VoteFor: true,
          VoteAgainst: true,
        },
      },
    },
  });
};

function About() {
  return <div>About</div>;
}

export default About;
