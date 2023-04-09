import s from './LoadMoreBtn.module.css';

const Button = ({ handleIncrement }) => {
  return (
    <button className={s.Button} onClick={handleIncrement} type="button">
      Load more
    </button>
  );
};

export default Button;
