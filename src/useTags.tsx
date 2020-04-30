import {useState} from 'react';

/*  use 开头 hooks */
const useTags = () => {
  const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
  return {
    tags, setTags
  }
}

export  {useTags}