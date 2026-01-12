
import { MovieResult } from './types';

export const MOCK_MOVIES: MovieResult[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi / Action',
    duration: '2h 28m',
    matchScore: 98,
    synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Cobb must lead his team through layers of reality in an impossible heist.',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZyH_df-jjnY7mujTbNIDudn3UM-jsRKDKZ4yBiBg2-vYNw7YvTCDk6tHYPx0OikVw1VeFR7rhh_su58-BaG9bSrluKrxrmDu4VNGW40VEI7vtKBdklg3KOIKj0B7qvhmx6yhcjZR0T_rmEirS5cOW0evCEERdZPGBWVfOwDtfXuNhSnN2oBsa-XFMT3RCpDG8gwgH_sPvx1EaCFlcImPyk0G0zT5SH4bZtxHzkcozS0yXzfW-fiUZc2oyNAmiratKcC-nl07ZVW0h',
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    streamingPlatforms: [
      { name: 'Netflix', icon: 'N', bg: 'bg-red-600' },
      { name: 'Prime', icon: 'PV', bg: 'bg-blue-500' },
      { name: 'Apple TV', icon: 'TV', bg: 'bg-gray-200', color: 'text-black' },
      { name: 'Google', icon: 'GP', bg: 'bg-yellow-500', color: 'text-black' }
    ]
  },
  {
    id: '2',
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi / Drama',
    duration: '2h 49m',
    matchScore: 92,
    synopsis: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEVANbsTW94Qw8Ok3QpBPs_e9b6vHcURii42yPwTIquvZzp__Etk16OR3YQLwRXv1HI3g6Y0GTiFl0PYVZJlpTP3UXMXzjEH69Rd3iYwPjye9X25nYMaSZwCPjzYG691EFYcT9lozxlP909V09nxsCXnWnCC_c7rHTtwIRUv-LE1A5jHpm1JNWWpKCqLzWywN7y1Ief4RvOC1BDlkBCNNy6V8pTIgsJzvsnGgW_3r5XIZ3pJHY4_asodmcfRWwMlYYXpiI3_v0zMoC',
    trailerUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    streamingPlatforms: [
      { name: 'Prime', icon: 'PV', bg: 'bg-blue-500' },
      { name: 'Apple TV', icon: 'TV', bg: 'bg-gray-200', color: 'text-black' }
    ]
  },
  {
    id: '3',
    title: 'Oppenheimer',
    year: 2023,
    genre: 'Biography / Drama',
    duration: '3h 00m',
    matchScore: 88,
    synopsis: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAgcUK72y0DgcINVISGRFRLIlCu4GRpX9xsGu8YxtT6dbTV6kWe5EfBJkDkgyXgcAt9A46Me5BNDauQ1cAqv16InvOUvG18BdQCA8SgbR3G7r7L1xKCM9Keu5lmr40xr-X1ZP7ww1fvzKQWIxbMs7-tze4CYxrOsxmezlRJViP0mGY2iFkTI9TtgFb8Ni9fmrQhZWdzWmwmSwaYMIR1BmxuWE4UeHrNE2PEd1HDMJUDAYC1WMAEK1dPXvq9tE7IsjIsED-eTmjd_MZ',
    trailerUrl: 'https://www.youtube.com/watch?v=uYPbbksJxIg',
    streamingPlatforms: [
      { name: 'Netflix', icon: 'N', bg: 'bg-red-600' },
      { name: 'Google', icon: 'GP', bg: 'bg-yellow-500', color: 'text-black' }
    ]
  }
];
