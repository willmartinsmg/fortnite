import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  password_confirmation: Yup.string().required(
    'Confirmação de senha é obrigatória'
  ),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password, password_confirmation }) {
    dispatch(signUpRequest(name, email, password, password_confirmation));
  }
  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirme a sua senha"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
