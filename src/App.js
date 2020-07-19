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
`;

const SingleItem = styled(Timeline.Item)`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState('');

  const matchesCategory = (subItem) => subItem.category === CATEGORIES[category];
  const itemMatchesCategory = (item) => category === null
    || item.items.some(subItem => matchesCategory(subItem));

  const matchesQuery = (subItem) => subItem.content.match(new RegExp(`${query}`, 'ig')) !== null;
  const itemMatchesQuery = (item) => query === ''
    || item.items.some(subItem => matchesQuery(subItem));

  const changelogItems = CHANGELOG
    .filter(item => itemMatchesCategory(item) && itemMatchesQuery(item))
    .map((item, index) => (
      <SingleItem key={index}>
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