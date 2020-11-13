import React, { useEffect } from "react";
import classes from "./MainContent.module.css";
import FilterForm from "../FilterForm/FilterForm";
import CountContainer from "../CountContainer/CountContainer";
import ImageContainer from "../ImageContainer/ImageContainer";
import { useSelector, useDispatch } from 'react-redux'
import NoMoviesFound from '../../Pages/NoMoviesFound'
import { useLocation } from 'react-router-dom'
import { fetchMovies, setActiveGenre } from '../../store/movieActions/actions'

const MainContent = (props) => {
  
  const reduxSearchParams = useSelector(state => state.movie.searchParams)
  //const location = useLocation()

  // const buildQuery = () => {
  //   let urlFilter = {}
  //   const url = new URLSearchParams(location.search)
  //   if (url.get('sortBy'))
  //   urlFilter.sortType = url.get('sortBy')
  //   if (url.get('sortOrder'))
  //   urlFilter.sortOrder = url.get('sortOrder')
  //   if (url.get('filter'))
  //   urlFilter.activeGenre = url.get('filter')
  //   if (url.get('search'))
  //   urlFilter.searchString = url.get('search')
  //   if (url.get('limit'))
  //   urlFilter.limit = url.get('limit')

  //   return urlFilter;
  // }
  
  //const query = buildQuery()
  const amount = useSelector(state => state.movie.amount)
  //let searchParams = Object.entries(query).length === 0 ? reduxSearchParams : query
  const dispatch = useDispatch()
  useEffect(() => {
    // if (searchParams.activeGenre)
    // dispatch(setActiveGenre(searchParams.activeGenre));

    dispatch(fetchMovies(reduxSearchParams))
  }, [])
  return (
    <div className={classes.wrapper}>
      <FilterForm />
      {amount ? (<><CountContainer /><ImageContainer editItem={props.editItem} filter={reduxSearchParams}/></>)
    : (<NoMoviesFound/>)
    }
      
    </div>
  );
};
export default React.memo(MainContent);
