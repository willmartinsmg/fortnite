import styled from 'styled-components';
// import { Form, Input } from '@rocketseat/unform';
import { Form } from '@unform/web';

export const Title = styled.div.attrs({
  className: 'text-3xl pt-4 text-gray-200 pb-4',
})``;

export const FForm = styled(Form).attrs({
  className: 'bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4',
})``;

export const Label = styled.div.attrs({
  className: 'block text-gray-200 text-sm font-bold mb-2 pt-4',
})``;

export const FInput = styled.input.attrs({
  className:
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
})``;

export const Select = styled.select.attrs({
  className:
    'block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
})``;
