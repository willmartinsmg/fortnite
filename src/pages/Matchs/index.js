/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

import fire from '~/services/fire';

import CardMatch from '~/components/CardMatch';

import { Title } from './styles';

export default function Matchs() {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    searchMatch();
  }, []);

  function searchMatch() {
    fire
      .database()
      .ref(`years/${2020}/month/april/match`)
      .on('value', snapshot => {
        setMatch(snapshot.val());
      });
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title>Matchs</Title>
        <Link to="formmatch">
          <AddCircleIcon fontSize="large" color="primary" />
        </Link>
      </div>

      {match.length > 1 ? (
        match.map(user => (
          <div>
            <CardMatch
              route={`/formmatch/${2020}/april/${user.match}`}
              match={user.match}
              damageG={user.damageG}
              damageT={user.damageT}
              damageW={user.damageW}
            />
          </div>
        ))
      ) : (
        <div className="text-gray-200">Loading...</div>
      )}
    </div>
  );
}
