import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Youngjun Woo',
      company: 'Google',
      title: 'Software Engineer',
      email: 'youngjun_92@hotmail.com',
      message: 'Hello World',
      fileName: 'woo',
      fileURL: null,
      theme: 'light',
    },
    2: {
      id: '2',
      name: 'Youngjun Woo',
      company: 'AIRBNB',
      title: 'Software Engineer',
      email: 'youngjun_92@hotmail.com',
      message: 'Hello World',
      fileName: 'woo',
      fileURL: null,
      theme: 'dark',
    },
    3: {
      id: '3',
      name: 'Youngjun Woo',
      company: 'Microsoft',
      title: 'Software Engineer',
      email: 'youngjun_92@hotmail.com',
      message: 'Hello World',
      fileName: 'woo',
      fileURL: null,
      theme: 'colorful',
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  const removeCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  // Auth logout if user not found
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          removeCard={removeCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
