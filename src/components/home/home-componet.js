import { Link } from 'react-router-dom'
import { getMovies } from '../../client'
import { HomeStyled } from './styled'
import { useEffect, useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HomeComponent = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const buscafilmes = async () => {
      try {
        const moviesData = await getMovies()
        const movieslist = moviesData.data.movie
        setMovies(movieslist)
      } catch (err) {
        console.log(err)
      }
    }

    buscafilmes()
  }, [])

  const star = (note) => {
    const incons = []
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= note ? 'yellowicon' : 'greyicon'
      incons.push(
        <FontAwesomeIcon key={i} icon={faStar} className={starClassName} />
      )
    }
    return incons
  }
  return (
    <>
      <HomeStyled>
        <div className='container'>
        <div className='sidemenu'>
          <div className='hello'>
            Hello, User !
          </div>
          <div className='addmovie'>
            <Link to={'/'}>Add Movie</Link>
          </div>
        </div>
        <div className='conteudo'>
        <h1 className='title'>All Movies</h1>
          <ul>{movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.image} alt={movie.title} className='image' />
              <li>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                {movie.key}
              </li>
              <p>{movie.releasedate}</p>
              <p>{movie.resume}</p>
              <p> {star(movie.note)} </p>
            </div>
          ))}
          </ul>
        </div>
        </div>
      </HomeStyled>
    </>
  )
}
