import styled from 'styled-components';

export const Loading = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #00ace6;
  }

  img {
    width: 120px;
    border-radius: 5px;
    margin-top: 20px;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
  }
  p {
    margin-left: 10px;
    color: #999;
    text-align: center;
    font-size: 14px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    border: 2px solid #eee;
    border-radius: 10px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 120px;
    margin-right: 20px;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #00ace6;

    &:hover {
      color: #b3ffff;
    }
  }

  p {
    color: #999;
  }

  span {
    color: #fff;
    margin-left: 10px;
    background: #b3ffff;
    border-radius: 2px;
    font-size: 15px;
    height: 20px;
    padding: 3px 4px;
  }
`;
