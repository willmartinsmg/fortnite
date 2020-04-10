import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #000;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(241, 231, 103, 1);
  background: -moz-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(241, 231, 103, 1)),
    color-stop(100%, rgba(254, 182, 69, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(241, 231, 103, 1) 0%,
    rgba(254, 182, 69, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#feb645', GradientType=1 );
`;
