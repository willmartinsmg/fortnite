import styled from 'styled-components';

export const Title = styled.div.attrs({
  className: 'text-3xl pt-4 text-gray-200 pb-4',
})``;

export const Match = styled.div.attrs({
  className: 'text-gray-200 text-lg font-bold pt-4 px-4',
})``;

export const Input = styled.input.attrs({
  className:
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
})``;

export const Select = styled.select.attrs({
  className:
    'block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
})``;
