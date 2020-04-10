import React from 'react';

export default function Table() {
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Data do Pedido</th>
            <th className="px-4 py-2">Loja</th>
            <th className="px-4 py-2">Setor</th>
            <th className="px-4 py-2">Cargo</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">11/02/2020</td>
            <td className="border px-4 py-2">15</td>
            <td className="border px-4 py-2">Frente de Loja</td>
            <td className="border px-4 py-2">OPERADORA DE CAIXA</td>
            <td className="border px-4 py-2">Excluir</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">11/02/2020</td>
            <td className="border px-4 py-2">15</td>
            <td className="border px-4 py-2">Frente de Loja</td>
            <td className="border px-4 py-2">OPERADORA DE CAIXA</td>
            <td className="border px-4 py-2">Excluir</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">11/02/2020</td>
            <td className="border px-4 py-2">15</td>
            <td className="border px-4 py-2">Frente de Loja</td>
            <td className="border px-4 py-2">OPERADORA DE CAIXA</td>
            <td className="border px-4 py-2">Excluir</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">11/02/2020</td>
            <td className="border px-4 py-2">15</td>
            <td className="border px-4 py-2">Frente de Loja</td>
            <td className="border px-4 py-2">OPERADORA DE CAIXA</td>
            <td className="border px-4 py-2">Excluir</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
