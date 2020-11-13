import React, { useState, useCallback } from "react";
import classes from "./ItemImage.module.css";
import MovieButton from "../MovieButton/MovieButton";
import ItemTitle from "../ItemTitle/ItemTitle";
import ItemReleaseDate from "../ItemReleaseDate/ItemReleaseDate";
import ItemGenre from "../ItemGenre/ItemGenre";
import PropTypes from "prop-types";
import MovieButtonWindow from "../MovieButton/MovieButtonWindow/MovieButtonWindow";
import ModalWindowWrapper from "../../ModalWindow/ModalWIndowWrapper/ModalWindowWrapper";
import ItemWindowOnEdit from "./ItemWindow/ItemWindowOnEdit";
import ItemWindowOnDelete from "./ItemWindow/ItemWindowOnDelete";
import { useDispatch } from "react-redux";
import { setMovieDescription } from "../../store/movieActions/actions";
import Link from "next/link";
import {useRouter} from 'next/router'

const ItemImage = (props) => {
  const [showModel, setShowModel] = useState(false);
  const [showModelWindowWrapper, setShowModelWindowWrapper] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const router = useRouter()

  const { editItem } = props;
  console.log(props)

  //TODO: rewrite the open/close functionality
  const toggleModal = (type) => {
    if (type === "edit") setOnEdit(!onEdit);
    if (type === "delete") setOnDelete(!onDelete);
    setShowModelWindowWrapper(!showModelWindowWrapper);
    if (showModel) setShowModel(!showModel);
  };

  function handleClickCLose() {
    setShowModel(!showModel);
  }
  const handleMovieDescription = useCallback(() => {
    dispatch(setMovieDescription(props.movie));
    //editItem();
  });
  const dispatch = useDispatch();
  return (
    <div
      className={classes.ItemWrapper}
      onMouseLeave={() => setShowModel(false)}
    >
      <div className={classes.ImageWrapper}>
        <Link href={`/film/${props.movie.id}`}>
        <img
          src={props.movie.poster_path || '/no-image.png'}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/no-image.png';
          }}
          className={classes.ItemImage}
          onClick={handleMovieDescription}
        />
        </Link>
        <MovieButton CloseWindow={handleClickCLose} />
        {showModel && (
          <MovieButtonWindow
            CloseWindow={handleClickCLose}
            EditWindow={() => toggleModal("edit")}
            DeleteWindow={() => toggleModal("delete")}
          />
        )}
        <div className={classes.HeaderDescription}>
          <ItemTitle name={props.movie.title} />
          <ItemReleaseDate year={props.movie.release_date.slice(0, 4)} />
        </div>
        <ItemGenre genre={props.movie.genres.join(", ")} />
      </div>
      {showModelWindowWrapper && onEdit && (
        <ModalWindowWrapper
          isEditButton
          onCloseRequest={() => toggleModal("edit")}
          children={
            <ItemWindowOnEdit
              title="EDIT MOVIE"
              movie={props.movie}
              onCloseRequest={() => toggleModal("edit")}
            />
          }
        />
      )}

      {showModelWindowWrapper && onDelete && (
        <ModalWindowWrapper
          onCloseRequest={() => toggleModal("delete")}
          children={
            <ItemWindowOnDelete
              title="DELETE MOVIE"
              onCloseRequest={() => toggleModal("delete")}
              movie={props.movie}
            />
          }
        />
      )}
    </div>
  );
};

ItemImage.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default React.memo(ItemImage);
