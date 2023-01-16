import React from 'react';
import { Formik } from 'formik';

export default function Searchbar({ onSubmit }) {
  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={}>
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </Formik>
  );
}
