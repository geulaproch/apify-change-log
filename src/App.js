import React, { useState } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { Select, List, Timeline, Input } from 'antd';

import { CHANGELOG, CATEGORIES } from './changelog';

const { Option } = Select;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 16px 0;
`;

const ChangeLog = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;

  & > :not(:last-child) {
    margin-bottom: 16px;
  }

  @media (max-width: 700px) {
    width: calc(100%-32px);
    padding: 0 16px;
  }
`;

const SingleItem = styled(Timeline.Item)`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState('');

  const matchesCategory = (subItem) => category === null || subItem.category === CATEGORIES[category];
  const matchesQuery = (subItem) => query === '' || subItem.content.match(new RegExp(`${query}`, 'ig')) !== null;
  
  const itemMatches = (item) => item.items.some(subItem => matchesQuery(subItem) && matchesCategory(subItem));

  const changelogItems = CHANGELOG
    .filter(item => itemMatches(item))
    .map((item, index) => (
      <SingleItem key={`date=${item.date}#index=${index}`}>
        <span>{item.date}</span>
        <List dataSource={
          item.items
            .filter(subItem => (category === null || matchesCategory(subItem)) && (query === '' || matchesQuery(subItem)))}
          renderItem={(subItem, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                title={subItem.category}
                description={ReactHtmlParser(subItem.content)}
              />
            </List.Item>
          )}
        />
      </SingleItem>
    ));

  const handleChange = (value) => {
    setCategory(value);
  }

  return (
    <Container>
      <ChangeLog>
        <Select
          placeholder='Select product'
          onChange={handleChange}>
          <Option key={-1} value={null}>All categories</Option>
          {Object.keys(CATEGORIES).map(item => (
            <Option
              key={item}
              value={item}>{CATEGORIES[item]}</Option>
          ))}
        </Select>
        <Input
          placeholder='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <Timeline>
          {changelogItems}
        </Timeline>
      </ChangeLog>
    </Container>
  );
}

export default App;