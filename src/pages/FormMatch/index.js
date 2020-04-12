/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import fire from '~/services/fire';
import history from '~/services/history';

import Input from '~/components/Input';

import { Title, Label, FForm } from './styles';

export default function FormMatch() {
  const [matchs, setMatch] = useState([
    {
      match: null,
      damageG: null,
      damageT: null,
      damageW: null,
    },
  ]);
  const [dataMatch, setDataMatch] = useState({
    match: null,
    damageG: null,
    damageT: null,
    damageW: null,
  });

  const { year, month, match } = useParams();

  useEffect(() => {
    searchMatch();

    if (typeof year !== 'undefined') {
      fire
        .database()
        .ref(`years/${year}/month/${month}/match/${match}`)
        .on('value', snapshot => {
          const data = snapshot.val();
          setDataMatch(data);
        });
    }
  }, []);

  function searchMatch() {
    fire
      .database()
      .ref(`years/${2020}/month/april/match`)
      .on('value', snapshot => {
        setMatch(snapshot.val());
      });
  }

  function handleSubmit(data) {
    fire
      .database()
      .ref(`years/${2020}/month/april/match/${data.match}`)
      .set({
        damageG: data.damageG,
        damageT: data.damageT,
        damageW: data.damageW,
        match: data.match,
      })
      .then(function() {
        toast.success('Saved data');
        history.push('/dashboard');
      })
      .catch(function(error) {
        toast.error('Falha no cadastro, verifique seus dados', error);
      });
  }
  return (
    <>
      <Title>Report the Damage</Title>
      <FForm
        onSubmit={handleSubmit}
        initialData={{
          damageG: dataMatch.damageG,
          damageT: dataMatch.damageT,
          damageW: dataMatch.damageW,
          match: dataMatch.match,
        }}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="text-2xl text-gray-200">
          {matchs.length > 0 ? `Next match: ${matchs.length}` : ''}
        </div>
        <Label>Match</Label>
        <div className="relative">
          <Input name="match" type="number" />
        </div>
        <Label>Guilherme</Label>
        <div className="relative">
          <Input name="damageG" type="number" />
        </div>
        <Label>Thiago</Label>
        <div className="relative">
          <Input name="damageT" type="number" />
        </div>
        <Label>William</Label>
        <div className="relative">
          <Input name="damageW" type="number" />
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
