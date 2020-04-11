import React, { useEffect } from 'react';
import fire from '~/services/fire';

import {
  Title,
  Form,
  Label,
  Select,
  Position,
  PositionOne,
  PositionTwo,
  PositionThree,
} from './styles';

function Dashboard() {
  useEffect(() => {
    fire.database().ref(`years/${2020}`);
    /* .ref(`users/${125}`)
      .set({
        username: 'beltrano12',
        email: 'beltrano@me.com',
        profile_picture: 'imageUrl',
        valor: 100,
      }); */
    const user = fire.auth().uid;
    console.tron.log('uid: ', user);
  }, []);

  return (
    <div>
      <Title>Matchs</Title>
      <Form>
        <Label>Month</Label>
        <div className="relative">
          <Select placeholder="Select a month">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
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
        <span className="" />

        <Position>
          <PositionOne />
          <PositionTwo />
          <PositionThree />
        </Position>
      </Form>
    </div>
  );
}

export default Dashboard;
