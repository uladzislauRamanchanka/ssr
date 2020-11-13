import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./form.module.css";
import { genres } from "../../constants/const";
import { useDispatch } from "react-redux";
import { createMovie } from "../../store/movieActions/actions";
import Selector from "../../Selector/Selector";

function AddFormContainer(props) {
  const { cancelEvent } = props;
  const initialValues = {
    tagline: "smth",
    vote_average: 0,
    vote_count: 0,
    release_date: "2018-02-08",
    poster_path: "",
    overview: "",
    budget: 10000,
    revenue: 1000,
    genres: [],
    runtime: "",
    title: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Fill in the title"),
    poster_path: Yup.string()
      .required("Fill in the url to the poster image")
      .url("Invalid URL"),
    overview: Yup.string().required("Fill in the short description"),
    runtime: Yup.number("Field must be a number")
      .min(0)
      .required("Fill in the movie duration time"),
    genres: Yup.array().required(
      "Fill in the list of genres (choose at least one genre)"
    ),
  });

  const dispatch = useDispatch();
  const onSubmit = (values, onSubmitProps) => {
    const runtime = Number(values.runtime);
    const payload = { ...values, runtime: runtime };
    dispatch(createMovie(payload));
    onSubmitProps.setSubmitting(false);
    cancelEvent();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.formControl}>
          <label htmlFor="title" className={classes.formLabel}>
            TITLE
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={classes.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <span className={classes.error}>{formik.errors.title}</span>
          ) : null}
        </div>
        <div className={classes.formControl}>
          <label htmlFor="release_date" className={classes.formLabel}>
            RELEASE DATE
          </label>
          <input
            type="date"
            name="release_date"
            id="release_date"
            className={classes.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.release_date}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="poster_path" className={classes.formLabel}>
            MOVIE URL
          </label>
          <input
            type="text"
            name="poster_path"
            id="poster_path"
            className={classes.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.poster_path}
          />
          {formik.touched.poster_path && formik.errors.poster_path ? (
            <span className={classes.error}>{formik.errors.poster_path}</span>
          ) : null}
        </div>
        <div className={classes.formControl}>
          <label htmlFor="genres" className={classes.formLabel}>
            Genres
          </label>
          <Selector
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={genres}
            name="genres"
            id="genres"
            multiple
          />
          {formik.touched.genres && formik.errors.genres ? (
            <span className={classes.error}>{formik.errors.genres}</span>
          ) : null}
        </div>
        <div className={classes.formControl}>
          <label htmlFor="overview" className={classes.formLabel}>
            OVERVIEW
          </label>
          <input
            type="text"
            name="overview"
            id="overview"
            className={classes.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.overview}
          />
          {formik.touched.overview && formik.errors.overview ? (
            <span className={classes.error}>{formik.errors.overview}</span>
          ) : null}
        </div>
        <div className={classes.formControl}>
          <label htmlFor="runtime" className={classes.formLabel}>
            RUNTIME
          </label>
          <input
            type="text"
            name="runtime"
            id="runtime"
            className={classes.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.runtime}
          />
          {formik.touched.runtime && formik.errors.runtime ? (
            <span className={classes.error}>{formik.errors.runtime}</span>
          ) : null}
        </div>
        <div className={classes.modalFooter}>
          <button
            type="reset"
            onClick={formik.handleReset}
            className={classes.formButton}
          >
            RESET
          </button>
          <button
            type="submit"
            className={classes.formButton}
            disabled={!formik.isValid}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default AddFormContainer;
