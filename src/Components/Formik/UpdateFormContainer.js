import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import classes from "./form.module.css";
import { genres } from "../../constants/const";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../store/movieActions/actions";

function UpdateFormContainer(props) {
  const { movieValues, cancelEvent } = props;
  const initialValues = {
    tagline: movieValues.tagline || "Empty tagline",
    vote_average: movieValues.vote_average,
    vote_count: movieValues.vote_count,
    release_date: movieValues.release_date,
    poster_path: movieValues.poster_path,
    overview: movieValues.overview,
    budget: movieValues.budget,
    revenue: movieValues.revenue,
    genres: movieValues.genres,
    runtime: +movieValues.runtime || 0,
    title: movieValues.title,
    id: movieValues.id,
  };
  const validationShema = Yup.object({
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
    id: Yup.string(),
  });
  const dispatch = useDispatch();
  const handleSubmit = (values, onSubmitProps) => {
    const runtime = Number(values.runtime);
    const payload = { ...values, runtime: runtime };
    dispatch(updateMovie(payload));
    onSubmitProps.setSubmitting(false);
    cancelEvent();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationShema}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="text"
              label="MOVIE ID"
              name="id"
              readOnly
            />
            <FormikControl
              control="input"
              type="text"
              label="TITLE"
              name="title"
            />
            <div className={classes.formControl}>
              <label htmlFor="release_date" className={classes.formLabel}>
                RELEASE DATE
              </label>
              <input
                name="release_date"
                id="release_date"
                onChange={formik.handleChange}
                value={formik.values.release_date}
                type="date"
                className={classes.formInput}
              />
            </div>
            <FormikControl
              control="input"
              label="MOVIE URL"
              name="poster_path"
            />
            <FormikControl
              control="select"
              label="GENRES"
              name="genres"
              options={genres}
              multiple
            />
            <FormikControl control="input" label="OVERVIEW" name="overview" />
            <FormikControl control="input" label="RUNTIME" name="runtime" />
            <div className={classes.modalFooter}>
              <button
                type="button"
                onClick={cancelEvent}
                className={classes.formButton}
              >
                CANCEL
              </button>
              <button
                type="submit"
                className={classes.formButton}
                disabled={!formik.isValid}
              >
                SUBMIT
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default UpdateFormContainer;
