import styled from 'styled-components';
import { Button } from '@mui/material';

export const RedButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #ff5252, #d32f2f);
    color: #ffffff;
    margin-left: 4px;
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(255, 82, 82, 0.25);
    &:hover {
      background: linear-gradient(135deg, #ff6b6b, #e53935);
      box-shadow: 0 4px 16px rgba(255, 82, 82, 0.35);
      transform: translateY(-1px);
    }
  }
`;

export const BlackButton = styled(Button)`
  && {
    background-color: #1a1a2e;
    color: #e8e8f0;
    margin-left: 4px;
    border-radius: 10px;
    border: 1px solid rgba(124, 77, 255, 0.15);
    &:hover {
      background-color: #252547;
      border-color: rgba(124, 77, 255, 0.3);
    }
  }
`;

export const DarkRedButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #ff5252, #d32f2f);
    color: #ffffff;
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    &:hover {
      background: linear-gradient(135deg, #ff6b6b, #e53935);
    }
  }
`;

export const BlueButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #7c4dff, #651fff);
    color: #ffffff;
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(124, 77, 255, 0.25);
    &:hover {
      background: linear-gradient(135deg, #651fff, #7c4dff);
      box-shadow: 0 4px 16px rgba(124, 77, 255, 0.35);
      transform: translateY(-1px);
    }
  }
`;

export const PurpleButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #7c4dff, #651fff);
    color: #ffffff;
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    &:hover {
      background: linear-gradient(135deg, #651fff, #7c4dff);
    }
  }
`;

export const LightPurpleButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #7c4dff, #b388ff);
    color: #ffffff;
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(124, 77, 255, 0.25);
    &:hover {
      background: linear-gradient(135deg, #b388ff, #7c4dff);
      box-shadow: 0 4px 16px rgba(124, 77, 255, 0.35);
    }
  }
`;

export const GreenButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #69f0ae, #00e676);
    color: #0f0f1a;
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(105, 240, 174, 0.25);
    &:hover {
      background: linear-gradient(135deg, #00e676, #69f0ae);
      box-shadow: 0 4px 16px rgba(105, 240, 174, 0.35);
      transform: translateY(-1px);
    }
  }
`;

export const BrownButton = styled(Button)`
  && {
    background-color: #1a1a2e;
    color: #e8e8f0;
    border-radius: 10px;
    border: 1px solid rgba(124, 77, 255, 0.15);
    &:hover {
      background-color: #252547;
      border-color: rgba(124, 77, 255, 0.3);
    }
  }
`;

export const IndigoButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #7c4dff, #651fff);
    color: #ffffff;
    border-radius: 10px;
    text-transform: none;
    font-weight: 600;
    &:hover {
      background: linear-gradient(135deg, #651fff, #7c4dff);
    }
  }
`;
