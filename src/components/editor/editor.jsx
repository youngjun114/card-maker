import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({ cards, addCard, updateCard, removeCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {Object.keys(cards).map((key) => {
        return (
          <CardEditForm
            updateCard={updateCard}
            removeCard={removeCard}
            key={key}
            card={cards[key]}
          />
        );
      })}
      <CardAddForm addCard={addCard} />
    </section>
  );
};

export default Editor;
