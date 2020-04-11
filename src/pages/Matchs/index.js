/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

import fire from '~/services/fire';

import CardMatch from '~/components/CardMatch';

import { Title } from './styles';

export default function Matchs() {
  const [match, setMatch] = useState('');

  useEffect(() => {
    searchMatch();
  }, []);

  console.tron.log('match', match);

  function searchMatch() {
    fire
      .database()
      .ref(`years/${2020}/month/april/match`)
      .on('value', snapshot => {
        const listMatch = snapshot.val();

        console.tron.log('listMatch', listMatch);

        setMatch(listMatch);
      });
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log(match);
  const listItems = numbers.map(number => <li>{number}</li>);
  // const listItems = match.map(number => <li>{number}</li>);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title>Matchs</Title>
        <Link to="formmatch">
          <AddCircleIcon fontSize="large" color="primary" />
        </Link>
      </div>
      {/* <ul>{listItems}</ul> */}
      <CardMatch match="1" damageG="100" damageT="200" damageW="300" />
    </div>
  );
}
