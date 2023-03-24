/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
// import Circle from '@uiw/react-color-circle';
import BackButton from '../../components/common/BackButton';

import Header from '../../components/common/Header';
import SearchBar from '../../components/common/SearchBar';
import {
  Circle,
  Square,
  RadiusCircle,
  RadiusSquare,
  HalfCircle,
  Triangle,
  Rhombus,
  Pentagon,
  Hexagon,
  Octagon,
  Entire,
  None,
  Plus,
  Minus,
  Extra,
  Total,
} from '../../assets/PillData/index';

import { pillSearchSelectedOption } from '../../atoms';

const SLink = styled(Link)`
  text-decoration: none;
`;

const SContainer = styled.div``;

const STitle = styled.div`
  font-weight: bold;
  font-size: 7vw;
  margin-left: 3vw;
  margin-bottom: 3vh;
`;

const SLine = styled.div`
  height: 1vh;
  background-color: #f1f3f4;
  margin-bottom: 3vh;
`;

const SSubTitle = styled.div`
  font-size: 6vw;
  margin-left: 3vw;
  padding-right: 3vw;
`;

const STextBox = styled.div`
  display: flex;
  align-items: center;
`;

const STransText = styled.div`
  opacity: 0;
`;

const SText = styled.div`
  font-size: small;
`;

const SSelectBox = styled.div`
  /* display: flex; */
`;

const SOption = styled.div`
  /* width: 100vw; */
  padding: 4vw 0;
  margin: 0 4vw;
  justify-content: center;
  text-align: center;
`;

const SPillColorBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  /* height: 10vw; */
`;
const SColorLable = styled.label`
  display: block;
  width: 8vw;
  height: 8vw;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SColorInput = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 1vw;
    text-align: center;
    height: 8vw;
    line-height: 8vw;
    font-weight: bold;
    display: none;
  }
  &:checked + ${SColorLable} {
    border: 1vw solid #009e8b; /* color: #fff; */
    height: 8vw;
  }
  display: none;
`;
const SImg = styled.img`
  width: 10vw;
  height: 8vw;
`;

const SPillShapeBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SShapeLable = styled.label`
  padding: 1vw;
`;

const SShapeInput = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    background: none;
    /* padding: 0px 1vw; */
    text-align: center;
    height: 10vw;
    line-height: 8vw;
    font-weight: bold;
    display: none;
  }
  &:checked + ${SShapeLable} {
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0.25vw 4px;
    height: 12vw;
  }
  display: none;
`;

// const SBox = styled.div``;
const SPillLineBox = styled.div`
  display: flex;
`;

const SLineLable = styled.label`
  padding: 1vw;
`;

const SLineInput = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    background: none;
    /* padding: 0px 1vw; */
    text-align: center;
    /* height: 10vw; */
    line-height: 8vw;
    font-weight: bold;
    display: none;
  }
  &:checked + ${SLineLable} {
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0.25vw 4px;
    height: 12vw;
  }
  display: none;
`;

const SPillIdentifierBox = styled.div``;

const SButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SSearchButton = styled.button`
  background-color: #00c192;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 10vw;
  padding-right: 10vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 3vh;
`;

function PillSearch() {
  const navigate = useNavigate();
  const [pillselectedOption, setpillselectedOption] = useRecoilState(
    pillSearchSelectedOption,
  );

  const PillColorName = [
    {
      name: '하양',
      color: '#FFFFFF',
    },
    {
      name: '노랑',
      color: '#FAFF00',
    },
    {
      name: '주황',
      color: '#FF8D08',
    },
    {
      name: '빨강',
      color: '#FF0303',
    },
    {
      name: '갈색',
      color: '#920101',
    },
    {
      name: '연두',
      color: '#61FF00',
    },
    {
      name: '초록',
      color: '#1EC800',
    },
    {
      name: '청록',
      color: '#009E8B',
    },
    {
      name: '파랑',
      color: '#0057FF',
    },
    {
      name: '남색',
      color: '#2B00A5',
    },
    {
      name: '자주',
      color: '#B6008E',
    },
    {
      name: '보라',
      color: '#9900CE',
    },
    {
      name: '회색',
      color: '#D9D9D9',
    },
    {
      name: '검정',
      color: '#000000',
    },
    {
      name: '투명',
      color: '#F1F3F4',
    },
    {
      name: '전체',
      color: '#F1F3F7',
    },
  ];

  const ShpaeImg = [
    Circle,
    RadiusCircle,
    RadiusSquare,
    HalfCircle,
    Triangle,
    Square,
    Rhombus,
    Pentagon,
    Hexagon,
    Octagon,
    Entire,
  ];
  const ShapeName = [
    '원형',
    '타원형',
    '장방형',
    '반원형',
    '삼각형',
    '사각형',
    '마름모',
    '오각형',
    '육각형',
    '팔각형',
    '전체',
  ];

  const LineImg = [None, Plus, Minus, Extra, Total];

  const LineName = ['없음', '+형', '-형', '기타', '전체'];

  const [selectPillColor, setSelectPillColor] = useState('');
  const [selectPillShape, setSelectPillShape] = useState('');
  const [selectPillLine, setSelectPillLine] = useState('');

  // 색상 선택
  const handleSelectedPillColor = e => {
    setSelectPillColor(e.target.value);
  };

  // 모양 선택
  const handleSelectedPillShape = e => {
    setSelectPillShape(e.target.value);
  };

  // 분할선 선택
  const handleSelectedPillLine = e => {
    setSelectPillLine(e.target.value);
  };

  // 검색 버튼
  const handleSearch = () => {
    const options = [];
    options.push(selectPillColor);
    options.push(selectPillShape);
    options.push(selectPillLine);

    if ('' in options) {
      alert('빈 값을 채워주세요');
      console.log('되돌아가기');
    } else {
      navigate('/pill/result');
    }

    setpillselectedOption(options);
  };

  return (
    <>
      <SContainer>
        <Header />
        <SLink to="/">
          <BackButton />
        </SLink>
        <STitle>병원명으로 검색</STitle>
        <SearchBar />
        <SLine />
        <STitle>조건으로 검색</STitle>
        <SSelectBox>
          <STextBox>
            <SSubTitle>색상</SSubTitle>
            <SText>빨강</SText>
          </STextBox>
          <SPillColorBox>
            {PillColorName.map(value => (
              <SOption key={`${value.name}`}>
                <SColorInput
                  type="radio"
                  onChange={handleSelectedPillColor}
                  value={value.name}
                  name="filter1"
                  id={`${value.color}` + '색상'}
                />
                <SColorLable
                  style={{ backgroundColor: `${value.color}` }}
                  htmlFor={`${value.color}` + '색상'}
                >
                  <STransText>{value.name}</STransText>
                </SColorLable>
              </SOption>
            ))}
          </SPillColorBox>
        </SSelectBox>
        <SSelectBox>
          <SSubTitle>모양</SSubTitle>
          <SPillShapeBox>
            {ShapeName.map((item, index) => (
              <SOption key={item}>
                <SShapeInput
                  type="radio"
                  onChange={handleSelectedPillShape}
                  value={item}
                  name="filter2"
                  id={`${item}` + '모양'}
                />
                <SShapeLable htmlFor={`${item}` + '모양'}>
                  <SImg src={ShpaeImg[index]} alt={ShpaeImg[index]} />
                  <SText>
                    <div>{item}</div>
                  </SText>
                </SShapeLable>
              </SOption>
            ))}
          </SPillShapeBox>
        </SSelectBox>
        <SSelectBox>
          <SSubTitle>분할선</SSubTitle>
          <SPillLineBox>
            {LineName.map((item, index) => (
              <SOption key={item}>
                <SLineInput
                  type="radio"
                  onChange={handleSelectedPillLine}
                  value={item}
                  name="filter3"
                  id={`${item}` + '모양'}
                />
                <SLineLable htmlFor={`${item}` + '모양'}>
                  <SImg src={LineImg[index]} alt={LineImg[index]} />
                  <SText>
                    <div>{item}</div>
                  </SText>
                </SLineLable>
              </SOption>
            ))}
          </SPillLineBox>
        </SSelectBox>
        <SSelectBox>
          <SSubTitle>식별문자</SSubTitle>
          <SPillIdentifierBox>?</SPillIdentifierBox>
        </SSelectBox>
      </SContainer>
      <SButtonWrapper>
        <SSearchButton onClick={handleSearch}>검 색</SSearchButton>
      </SButtonWrapper>
    </>
  );
}

export default PillSearch;
