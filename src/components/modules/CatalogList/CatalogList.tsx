import React from 'react';
import styles from 'styles/catalogItem/index.module.scss';
import CatalogItem from 'components/modules/CatalogList/CatalogItem';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { fetchBooks } from 'store/book/asyncActions';
import { selectBookData } from 'store/book/selectors';
import { selectCart } from 'store/cart/selectors';
import { selectFavorite } from 'store/favorite/selectors';
import { useAppDispatch } from 'store/store';

const CatalogList = () => {
  const { items } = useSelector(selectBookData);
  const { items: cartItems } = useSelector(selectCart);
  const { items: favoriteItems } = useSelector(selectFavorite);
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const jsonCart = JSON.stringify(cartItems);
      localStorage.setItem('cart', jsonCart);
      const jsonFavorite = JSON.stringify(favoriteItems);
      localStorage.setItem('favorite', jsonFavorite);
    }
    isMounted.current = true;
  }, [cartItems, favoriteItems]);

  useEffect(() => {
    const getBooks = async () => {
      dispatch(fetchBooks());
    };

    getBooks();
  }, [dispatch]);

  const renderedItems = items.slice(0, 10).map((item) => <CatalogItem item={item} key={item.id} />);
  return <div className={styles.catalog}>{renderedItems}</div>;
};

export default CatalogList;