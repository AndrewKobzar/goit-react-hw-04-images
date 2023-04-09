import { useState } from 'react';
import s from './Searchbar.module.css';
const Searchbar = ({ onSubmit }) => {
const [request, setRequest] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (request.trim() === '') {
      return window.alert('enter a query');
    }

    onSubmit(request);

    e.currentTarget.elements.request.value = '';
  };

  const handlerChange = e => {
    setRequest(e.target.value.toLowerCase());
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button className={s.SearchFormBtn} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 20 20"
          >
            <label className={s.SearchFormBtnLabel}>Search</label>
            <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
          </svg>
        </button>

        <input
          className={s.SearchFormInput}
          onChange={handlerChange}
          type="text"
          autoComplete="off"
          name="request"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
