import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin: 0 16px;
    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4px;
  color: white;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Space = styled.div`
  height: 16px;
`

function Tags() {
  const {tags, setTags} = useTags();
  console.log(setTags)
  return (
    <Layout>
      <TagList>
      {tags.map(tag =>
        <li key={tag}>
          <Link to={'/tags/' + tag}>
          <span className="oneLine">{tag}</span>
          <Icon name="right" />
          </Link>
        </li>)
      }
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
          <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;