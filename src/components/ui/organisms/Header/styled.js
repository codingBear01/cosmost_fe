import styled from 'styled-components';
import { COLOR_LIST } from '../../../../style';

export const Header = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: ${COLOR_LIST.dark_blue};
  border: 1px solid black;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${COLOR_LIST.white};
`;

export const HeaderUtilWrap = styled.div`
  display: flex;
`;

export const LoginBtn = styled.button`
  height: 36px;
  margin-right: 10px;
  padding: 0 12px;
  border: 1px solid ${COLOR_LIST.basic_blue};
  border-radius: 8px;
  background-color: ${COLOR_LIST.light_blue};
  line-height: 34px;
  font-weight: 600;
  color: ${COLOR_LIST.white};
  transition: all 0.1s linear;

  &: hover {
    border: 1px solid ${COLOR_LIST.light_blue};
    background-color: ${COLOR_LIST.basic_blue};
    cursor: pointer;
  }
`;

export const HeaderIconWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  color: ${COLOR_LIST.white};

  &: hover {
    cursor: pointer;
  }
`;
