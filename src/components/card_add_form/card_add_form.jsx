import React, { useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';

const CardAddForm = ({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

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
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
        <FileInput
          name={file.fileName}
          onFileChange={onFileChange}
          label='Upload'
        />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
