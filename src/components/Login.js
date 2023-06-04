import React, { useState, useEffect } from "react";

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onLogin(password, email);
  }

  return (
    <div className="auth" >
      <h2 className="auth__title">Вход</h2>
      <form name="login" className="auth__form" onSubmit={handleSubmit} noValidate>
        <input type="email" name="email" className="auth__input" placeholder="Email" value={email} onChange={handleEmailInput} required />
        <input type="password" name="password" className="auth__input" placeholder="Пароль" value={password} onChange={handlePasswordInput} required />
        <button className="auth__saved" type="submit">Войти</button>
      </form>
    </div>
  )
}