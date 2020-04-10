import React from 'react';
import api from '~/services/api';

import Table from '~/components/Table';
import Button from '~/components/Button';

// import { Title } from './styles';

function Dashboard() {
  api.get('geral/listafiliais');

  return (
    <div>
      <div className="text-3xl pt-4">Solicitações Pendentes</div>
      <Table />
      <div className="pt-4">
        <Button />
      </div>
    </div>
  );
}

export default Dashboard;
