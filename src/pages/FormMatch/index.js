import React from 'react';
import { toast } from 'react-toastify';
import fire from '~/services/fire';
import history from '~/services/history';

import { Title, Label, FForm, FInput } from './styles';

export default function FormMatch() {
  function handleSubmit() {
    fire
      .database()
      .ref(`years/${2020}/month/april/match/${2}`)
      .set({
        guilherme: 100,
        thiago: 200,
        william: 300,
      })
      .then(function() {
        toast.success('Saved data');
        history.push('/dashboard');
      })
      .catch(function(error) {
        toast.error('Falha no cadastro, verifique seus dados');
        console.tron.log('error message', error.message);
      });
  }
  return (
    <>
      <Title>Report the Damage</Title>
      <FForm
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Label>Guilherme</Label>
        <div className="relative">
          <FInput name="damageG" type="number" />
        </div>
        <Label>Thiago</Label>
        <div className="relative">
          <FInput name="damageT" type="number" />
        </div>
        <Label>William</Label>
        <div className="relative">
          <FInput name="damageW" type="number" />
        </div>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </FForm>
    </>
  );
}
