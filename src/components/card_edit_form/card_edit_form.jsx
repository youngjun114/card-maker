import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardEditForm = ({ FileInput, card, updateCard, removeCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {
    removeCard(card);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        type='text'
        name='company'
        value={company}
        onChange={onChange}
      />
      <select ref={themeRef} name='theme' value={theme} onChange={onChange}>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        ref={titleRef}
        type='text'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        type='text'
        name='email'
        value={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        name='message'
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput
          name={fileName}
          onFileChange={onFileChange}
          label='No File'
        />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
