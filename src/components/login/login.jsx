import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  // when logged in, link to the path '/maker' with user id state
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  // if logged in, it will redirect to '/maker' with user id information when component is mounted or updated.
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
