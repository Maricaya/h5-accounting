import {useState} from 'react';

/*  use 开头,封装一个自定义 Hook */
const useTags = () => {
  const [tags, setTags] = useState<{id:number;name:string}[]>([
    {id: 1,name: '衣'},
    {id: 2,name: '食'},
    {id: 3,name: '住'},
    {id: 4,name: '行'}
  ])
  // const tagIds = tags.map(item => item.id)
  return {
    tags, setTags
  }
}

export  {useTags}