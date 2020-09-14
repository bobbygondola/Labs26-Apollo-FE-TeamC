import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  background-color: blue;
  display: flex;
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
            <h2>Owner</h2>
          </Link>
        </ChildContainer>

        <ChildContainer>
          <Link to="/member">
            <h2>Member</h2>
          </Link>
        </ChildContainer>
      </FirstContainer>

      <SecondContainer>
        <ChildContainer>
          <Link to="/join-survey">
            <button>Join Survey</button>
          </Link>
        </ChildContainer>

        <ChildContainer>
          <Link to="/new-topic">
            <button type="dashed">Add New Topic</button>
          </Link>
        </ChildContainer>

        <ChildContainer>
          <h2>User</h2>
        </ChildContainer>
      </SecondContainer>
    </NavContainer>
  );
};

export default Navigation;
