import React from 'react';

// import { Container } from './styles';

export default function CardPosition({ position, name, pointing }) {
  return (
    <div className="mt-8 py-5 px-2 bg-gray-400 rounded">
      <div className="text-lg pb-3">{position}</div>
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src="https://tailwindcss.com/img/jonathan.jpg"
          alt="Avatar of Jonathan Reinink"
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{name}</p>
          <p className="text-gray-600">{pointing}</p>
        </div>
      </div>
    </div>
  );
}
