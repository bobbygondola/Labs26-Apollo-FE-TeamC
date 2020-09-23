import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewTopicModal from './pages/NewTopicModal/NewTopicModalContainer';

const StyledButton = styled.button`
  color: white;
  background-color: ROYALBLUE;
  border: none;
  padding: 1;
  border-radius: 4px;
`;
const NavContainer = styled.div`
  display: flex;
  color: red;
`;

const FirstContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-end;
`;

const SecondContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 30%;
  justify-content: flex-end;
`;

const StyledText = styled.h2`
border-bottom: solid grey 3px;
color:grey;
&:hover{
    color:ROYALBLUE;
    border-bottom: solid ROYALBLUE; 3px;
}
`;

const ChildContainer = styled.div`
  margin: 0.5rem 0.5rem;
`;
const Navigation = () => {
  return (
    <NavContainer>
      <div>
        <Link to="/">
          <h1>Apollo</h1>
        </Link>
      </div>
      <FirstContainer>
        <ChildContainer>
          <Link to="/owner">
            <StyledText>Owner</StyledText>
          </Link>
        </ChildContainer>

        <ChildContainer>
          <Link to="/member">
            <StyledText>Member</StyledText>
          </Link>
        </ChildContainer>
      </FirstContainer>

      <SecondContainer>
        <ChildContainer>
          <Link to="/join-survey">
            <StyledButton>Join Survey</StyledButton>
          </Link>
        </ChildContainer>

        <ChildContainer>
          <NewTopicModal />
        </ChildContainer>

        <ChildContainer>
          <h2>User</h2>
        </ChildContainer>
      </SecondContainer>
    </NavContainer>
  );
};

export default Navigation;
