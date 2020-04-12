/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import fire from '~/services/fire';

import CardPosition from '~/components/CardPosition';

import { Title, Form, Label, Select } from './styles';

function Dashboard() {
  const [qtd, setQtd] = useState(0);
  const [match, setMatch] = useState([]);
  const [position1, setPosition1] = useState([]);
  const [position2, setPosition2] = useState([]);
  const [position3, setPosition3] = useState([]);

  useEffect(() => {
    searchMatch();
  }, []);

  if (match.length > 0 && qtd === 0) {
    setQtd(1);
    sumPoints();
  }

  function searchMatch() {
    fire
      .database()
      .ref(`years/${2020}/month/april/match`)
      .on('value', snapshot => {
        setMatch(snapshot.val());
      });
  }

  function sumPoints() {
    const totalG = match.reduce((a, b) => a + parseInt(b.damageG), 0);
    const totalT = match.reduce((a, b) => a + parseInt(b.damageT), 0);
    const totalW = match.reduce((a, b) => a + parseInt(b.damageW), 0);

    firstPosition(totalG, totalT, totalW);
    secondPosition(totalG, totalT, totalW);
    thirdPosition(totalG, totalT, totalW);
  }

  function firstPosition(totalG, totalT, totalW) {
    if (totalW > totalG && totalW > totalT) {
      setPosition1({
        name: 'William',
        damage: totalW,
      });
    }

    if (totalT > totalG && totalT > totalW) {
      setPosition1({
        name: 'Thiago',
        damage: totalT,
      });
    }

    if (totalG > totalW && totalG > totalT) {
      setPosition1({
        name: 'Guilherme',
        damage: totalG,
      });
    }
  }

  function secondPosition(totalG, totalT, totalW) {
    if (
      (totalG < totalW && totalG > totalT) ||
      (totalG < totalT && totalG > totalW)
    ) {
      if (totalW > totalT) {
        position2.pointtogo = totalW - totalG;
      } else {
        position2.pointtogo = totalT - totalG;
      }

      setPosition2({
        name: 'Guilherme',
        damage: totalG,
        pointtogo: position2.pointtogo,
      });
    }

    if (
      (totalW < totalG && totalW > totalT) ||
      (totalW < totalT && totalW > totalG)
    ) {
      if (totalG > totalT) {
        position2.pointtogo = totalG - totalW;
      } else {
        position2.pointtogo = totalT - totalW;
      }

      setPosition2({
        name: 'William',
        damage: totalW,
        pointtogo: position2.pointtogo,
      });
    }

    if (
      (totalT < totalG && totalT > totalW) ||
      (totalT < totalW && totalT > totalG)
    ) {
      if (totalG > totalW) {
        position2.pointtogo = totalG - totalT;
      } else {
        position2.pointtogo = totalW - totalT;
      }

      setPosition2({
        name: 'Thiago',
        damage: totalT,
        pointtogo: position2.pointtogo,
      });
    }
  }

  function thirdPosition(totalG, totalT, totalW) {
    if (totalW < totalT && totalW < totalG) {
      if (totalG > totalT) {
        position3.pointtogo = totalT - totalW;
      } else {
        position3.pointtogo = totalG - totalW;
      }

      setPosition3({
        name: 'William',
        damage: totalW,
        pointtogo: position3.pointtogo,
      });
    }

    if (totalT < totalW && totalT < totalG) {
      if (totalG > totalW) {
        position3.pointtogo = totalW - totalT;
      } else {
        position3.pointtogo = totalG - totalT;
      }

      setPosition3({
        name: 'Thiago',
        damage: totalT,
        pointtogo: position3.pointtogo,
      });
    }

    if (totalG < totalT && totalG < totalW) {
      if (totalW > totalT) {
        position3.pointtogo = totalT - totalG;
      } else {
        position3.pointtogo = totalW - totalG;
      }

      setPosition3({
        name: 'Guilherme',
        damage: totalG,
        pointtogo: position3.pointtogo,
      });
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title>Dashboard</Title>
        <Link to="formmatch">
          <AddCircleIcon fontSize="large" color="primary" />
        </Link>
      </div>
      <Form>
        <Label>Month</Label>
        <div className="relative">
          <Select placeholder="Select a month">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option selected>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </Select>
        </div>
        <div className="text-gray-200 text-lg my-4">
          Quantity of matchs:{' '}
          {match.length > 0 ? match.length - 1 : 'Loading...'}
        </div>

        <CardPosition
          position="1ª position"
          name={position1.name}
          pointing={position1.damage}
          avatar="https://66.media.tumblr.com/d9c89231c48776b7e5bd1505924baa99/a60033b840c90382-e4/s500x750/464a53f2fcd29771906f99be408e7c79c290f161.gifv"
          pointtogo="You are congratulated!"
        />
        <CardPosition
          position="2ª position"
          name={position2.name}
          pointing={position2.damage}
          avatar="https://66.media.tumblr.com/997926f2d356ded3d5e5149819be878c/56ef1865c560675c-52/s500x750/4f9cca417b4573878c8c70550bab0da063c5888c.gifv"
          pointtogo={
            position2.pointtogo > 0
              ? `${position2.pointtogo} points for first place`
              : 'Loading...'
          }
        />
        <CardPosition
          position="3ª position"
          name={position3.name}
          pointing={position3.damage}
          avatar="https://static.planetminecraft.com/files/avatar/2557851_25.gif"
          pointtogo={
            position3.pointtogo > 0
              ? `${position3.pointtogo} points for second place`
              : 'Loading...'
          }
        />
      </Form>
    </div>
  );
}

export default Dashboard;
