export interface Genre {
  id: number
  name: string
}

export interface Movie {
  adult?: boolean
  title?: string
  backdrop_path?: string
  media_type?: string
  release_date?: string
  first_air_date?: string
  genre_ids?: number[]
  id: number
  name?: string
  origin_country?: string[]
  original_language?: string
  original_name?: string
  overview?: string
  popularity?: number
  poster_path?: string
  vote_average?: number
  vote_count?: number
}

// adult: false,
//   backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
//     genre_ids: [16, 12, 10751, 14, 35],
//       id: 502356,
//         original_language: "en",
//           original_title: "The Super Mario Bros. Movie",
//             overview:
// "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
//   popularity: 9032.947,
//     poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
//       release_date: "2023-04-05",
//         title: "The Super Mario Bros. Movie",
//           video: false,
//             vote_average: 7.5,
//               vote_count: 756,

export interface Element {
  type: 'Bloopers' | 'Featurette' | 'Behind the Scenes' | 'Clip' | 'Trailer' | 'Teaser'
}
