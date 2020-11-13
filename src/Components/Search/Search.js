import React, { useState, useEffect } from "react";
import classes from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchByTitle } from "../../store/movieActions/actions";
import { useHistory, useLocation } from "react-router-dom";
import { formLink } from "../../store/utils";
import { setTitle } from "../../store/movieActions/actions";
import { useRouter } from 'next/router'
import Link from "next/link";

const Search = (props) => {
  const history = useHistory();
  //const location = useLocation();
  const router = useRouter();

  console.log(router)

   const filter = useSelector((state) => state.movie.searchParams)
  // const url = new URLSearchParams(location.search)
  // const urlTitle = url.get('search') ? url.get('search') : ''
  const searchTitle = useSelector(
  (state) => state.movie.searchParams.searchString
  );
  // const firstValue = urlTitle ? urlTitle : searchTitle
  const [value, setValue] = useState(searchTitle)
  const query = formLink(filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTitle(value));
  }, [value]);
  return (
    <div className={classes.searchContainer}>
      <input
        className={classes.inputSearch}
        placeholder="What do you want to watch"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Link href={'/search'}><a><div
        className={classes.SearchButton}
        onClick={() => {
          if(value) {
            dispatch(searchByTitle(searchTitle));
          }
        }}
      >
        Search
      </div></a></Link>
    </div>
  );
};

export default React.memo(Search);
