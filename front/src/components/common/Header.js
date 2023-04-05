/* eslint-disable no-unused-vars */
import React from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loginState } from '../../atoms';

const SLink = styled(Link)`
  text-decoration: none;
`;

const SLogo = styled.div`
  font-size: 10vw;
  font-weight: bold;
  color: #00c192;
  margin-top: 5vh;
  margin-left: 6vw;
`;

const SLoginButton = styled.button``;

const SLoginLink = styled.a`
  color: black;
  text-decoration: none;
`;

const SLogoutButton = styled.button``;

function Header() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const accessToken = localStorage.getItem('accessToken');

  const onClickLogoutHandler = async () => {
    console.log('로그아웃')
    await axios
      .get(`${process.env.REACT_APP_API_URL}/user/logout`, {
        headers: {
          Authorization: accessToken,
        },
        withCredentials: true,
      })
      .then(res => {
        setIsLogin(false);
        localStorage.removeItem('accessToken');
        console.log(res);
      })
      .catch(err => console.log(err));
    console.log(isLogin)
  };

  return (
    <div>
      <SLink to="/">
        <SLogo>맞닥</SLogo>
      </SLink>
      <SLoginButton>
        <SLoginLink
          href={`${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`}
        >
          로그인
        </SLoginLink>
      </SLoginButton>
      <SLogoutButton type="button" onClick={onClickLogoutHandler}>
        로그아웃
      </SLogoutButton>
    </div>
  );
}

export default Header;
