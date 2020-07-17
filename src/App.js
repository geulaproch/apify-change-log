import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

import { CHANGELOG } from './changelog';

const ChangeLog = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const SingleItem = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  render() {
    let items = CHANGELOG.map(item => (
      <SingleItem>
        <span>{item.date}</span>
        <span>{item.items[0].category}</span>
        <span>{ReactHtmlParser(item.items[0].content)}</span>
      </SingleItem>
    ));

    return (
      <ChangeLog>
        {items}
      </ChangeLog>
    );
  }
}


export default App;