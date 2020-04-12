import React from 'react';

// import { Container } from './styles';

export default function CardPosition({
  position,
  name,
  pointing,
  pointtogo,
  avatar,
}) {
  return (
    <div className="mt-8 py-5 px-5 bg-gray-400 rounded">
      <div className="text-3xl pb-3">{position}</div>
      <div className="flex items-center">
        <img className="w-20 h-20 rounded-full mr-6" src={avatar} alt={name} />
        <div className="text-lg my-2 pr-5">
          <p className="text-gray-900 mb-2 leading-none">{name}</p>
          <p className="text-gray-700">{pointing}</p>
        </div>
      </div>
      <div className="text-gray-600 mt-4">{pointtogo}</div>
    </div>
  );
}
