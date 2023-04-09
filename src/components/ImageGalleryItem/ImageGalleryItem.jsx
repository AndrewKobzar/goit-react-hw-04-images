import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ hits, handleItemClick }) => {
  const { webformatURL, largeImageURL, user } = hits;
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => handleItemClick({ largeImageURL, user })}
    >
      <img className={s.ImageGalleryItemImage} src={webformatURL} alt={user} />
    </li>
  );
};

export default ImageGalleryItem;
