import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function CardMatch({ route, match, damageG, damageT, damageW }) {
  return (
    <div className="bg-gray-600 rounded m-4">
      <Link to={route}>
        <div className="text-gray-200 text-lg font-bold pt-4 px-4">
          Match: {match}
        </div>
        <div className="relative text-gray-200 p-4">
          <table className="table-auto items-center w-full text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">Guilherme</th>
                <th className="px-4 py-2">Thiago</th>
                <th className="px-4 py-2">William</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{damageG}</td>
                <td className="border px-4 py-2">{damageT}</td>
                <td className="border px-4 py-2">{damageW}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Link>
    </div>
  );
}
