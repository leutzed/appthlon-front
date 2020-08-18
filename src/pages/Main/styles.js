import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    border: 2px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 3px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #e3ddd3;
  border: 5px;
  padding: 0 15px;
  margin-top: 10px;
  height: 30px;
  border-radius: 4px;


  display: flex;
  justify-content: center;
  align-items: center;
`;
