import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {cards.map((card) => {
        return <CardEditForm key={card.id} card={card} />;
      })}
    </section>
  );
};

export default Editor;
