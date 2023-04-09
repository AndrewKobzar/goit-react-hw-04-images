import { useState, useEffect } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/LoadMoreBtn';
import Modal from 'components/Modal/Modal';
import { getSearchApi } from '../Servise/Api';
import s from './ImageGallery.module.css';

const ImageGallery = ({ propName }) => {
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  useEffect(() => {
    if (propName !== name) {
      setPage(1);
      setName(propName);

      setTotalHits(0);
    }
  }, [propName, name]);

  useEffect(() => {
    if (!name) {
      return;
    }

    const setGalleryCards = async () => {
      setError(null);

      try {
        const data = await getSearchApi(name, page);

        if (data.hits.length === 0) {
          setHits([]);
          window.alert(`no response on request ${name}`);
          throw new Error();
        }

        setHits(prev => (page === 1 ? data.hits : [...prev, ...data.hits]));
        setTotalHits(data.totalHits);
      } catch (error) {
        setError(error.message);
      }
    };

    setGalleryCards();
  }, [name, page]);

  const openModal = modalData => {
    setModalData(modalData);
  };

  return (
    <>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <ul className={s.ImageGallery}>
            {hits &&
              hits.map(hit => {
                return (
                  <ImageGalleryItem
                    key={hit.id}
                    hits={hit}
                    handleItemClick={openModal}
                  />
                );
              })}
          </ul>

          {hits.length > 0 && hits.length !== totalHits && (
            <Button handleIncrement={() => setPage(prev => prev + 1)} />
          )}
        </>
      )}

      {modalData && <Modal onClose={() => setModalData(null)} {...modalData} />}
    </>
  );
};

export default ImageGallery;
