import { useState } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import s from './App.module.css';


export const App = () => {
  const [name, setName] = useState('');
  const handlerSearchbarSubmit = name => {
    setName(name);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handlerSearchbarSubmit} />
      <ImageGallery propName={name} />
    </div>
  );
};
