import styled from "styled-components";
import {ISelected} from "./interfaces";

const DayElementContainer = styled.div<ISelected>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 77px;
  aspect-ratio: 9/10;
  width: 100%;
  gap: 1.7238em;
  border-radius: 12px;
  background: ${(props) => (props.isSelected ? 'rgba(208, 172, 172, 0.1);' : 'transparent')};
  scale: ${(props) => (props.isSelected ? '1.15' : 'none')};
  transition: all 0.2s ease-in-out;
  pointer-events: stroke;
  
  @media (max-width: 968px) {
    padding: 10px;
    max-width: 45px;
    aspect-ratio: 9/12;
    width: 100%;
    gap: 1.1em;
    scale: none;
    align-items: center;
    justify-content: center;
  }
  
`
const DayElementLine = styled.line`
  display: block;
  height: 2px;
  width: 100%;
  background-color: black;
`
const Date = styled.h3<ISelected>`
  font-size: 32px;
  line-height: 98.9%;
  color: ${(props) => (props.isSelected ? '#DA654D' : 'black')};
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
  
  @media (max-width: 576px) {
    font-size: 20px;
  }
  
    @media (max-width: 375px) {
    font-size: 15px;
    }
  
`

const WeekDayTitle = styled.p<ISelected>`
  font-size: 13px;
  color: ${(props) => (props.isSelected ? '#DA654D' : 'black')};
  
    @media (max-width: 768px) {
      align-items: center;
    }
`

export {DayElementContainer, DayElementLine, Date, WeekDayTitle}