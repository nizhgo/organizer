import styled from "styled-components";

const DailyTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const DailyTaskGridContainer = styled.div`
  display: grid;
  width: 100%;
  text-align: start;
  grid-template-columns: 32px auto 32px;
  grid-gap: 6px;
`

const PopoverItem = styled.p`
  cursor: pointer;
  color: black;

  :hover {
    color: #6024de;
  }

  animation: 0.5s ease-in-out;
`
const IconContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 32px;
  height: 32px;
`


const TaskInfoContainer = styled.div<{ isComplete: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 0.5em;
  text-decoration: ${props => props.isComplete ? 'line-through' : 'none'};
`

const TaskTitle = styled.h6`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 113%;
  color: #000000;
`

const TaskBody = styled.p`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 113%;
  color: #515151;
`

export {
	DailyTaskWrapper,
	DailyTaskGridContainer,
	PopoverItem,
	IconContainer,
	TaskInfoContainer,
	TaskTitle,
	TaskBody
};