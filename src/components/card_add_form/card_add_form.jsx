import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };
    console.log(card);
    formRef.current.reset();
    addCard(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} type='text' name='name' placeholder='Name' />
      <input
        ref={companyRef}
        type='text'
        name='company'
        placeholder='Company'
      />
      <select ref={themeRef} name='theme'>
        <option>light</option>
        <option>dark</option>
        <option>colorful</option>
      </select>
      <input ref={titleRef} type='text' name='title' placeholder='Job Title' />
      <input ref={emailRef} type='text' name='email' placeholder='Email' />
      <textarea ref={messageRef} name='message' placeholder='Message' />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
