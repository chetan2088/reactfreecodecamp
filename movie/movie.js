 movies = [
  {
    title: 'A Wednesday',
    rating: 5,
    watched: true
  },
  {
    title: 'Avengers',
    rating: 4.5,
    watched: true
  },
  {
    title: 'Sholey',
    rating: 4,
    watched: false
  },
  {
    title: 'Tiranga',
    rating: 4,
    watched: true
  }
]

movies.forEach((movie) => {
  const watched = movie.watched === true ? 'watched' : 'not seen'
  console.log('I have ' + watched + ' "' + movie.title + '" - ' + movie.rating + ' stars')
})