import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';

function Tags() {
  const {tags, setTags} = useTags();
  console.log(setTags)
  return (
    <Layout>
      <ol>
      {tags.map(tag =>
        <li key={tag}>{tag}</li>)}
      </ol>
    </Layout>
  );
}

export default Tags;