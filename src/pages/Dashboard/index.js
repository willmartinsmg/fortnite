import React, { useEffect } from 'react';
import fire from '~/services/fire';

import CardPosition from '~/components/CardPosition';

import { Title, Form, Label, Select } from './styles';

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
  }, []);

  return (
    <div>
      <Title>Dashboard</Title>
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
        <span className="pt-8" />

        <CardPosition position="1º position" name="William" pointing="2345" />
        <CardPosition position="2º position" name="Guilherme" pointing="2345" />
        <CardPosition position="3º position" name="Thiago" pointing="2345" />
      </Form>
    </div>
  );
}

export default Dashboard;
