import styled from "styled-components";

const ErrorMessage = styled.div`
  color: #FF8B8B;
  font-size: 12px;
  height: 100%;
`


const TaskDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.1em;
`

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5em;
  justify-content: end;
  align-items: center;
`

const SubmitButton = styled.button`
  padding: 8px 14px;
  gap: 10px;
  background: #672EE3;
  border: 1px solid #756391;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 98.9%;
  cursor: pointer;
  box-sizing: border-box;

  :hover {
    background: #6024de;
  }
`

const TaskTitle = styled.input`
  width: 100%;
`

const TaskDescription = styled.textarea`
  width: 100%;
  height: max-content;
  border: none;
  resize: none;
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #000;
  padding: 5px;
  border-radius: 4px;
  box-sizing: border-box;
`

const CancelButton = styled(SubmitButton)`
  background: transparent;
  color: #9D9D9D;
  border: 1px solid #9D9D9D;

  :hover {
    background: #D2D2D2;
  }
`
const TaskTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  padding: 5px;
`

export {
    TaskTitleWrapper,
    TaskTitle,
    TaskDescription,
    TaskDescriptionWrapper,
    ButtonsContainer,
    SubmitButton,
    CancelButton,
    ErrorMessage
};