import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol { 
    margin: 0 -12px;
    > li { 
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
       background: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`

const TagsSection: React.FC = (props) => {
  // useState<类型>(参数)
  // 优点: 参数为空时, ts可以判断出参数的类型
  // useState<string[]>([])
  // tags.map(tag => ... ) ts可以判断出tag是 String，而不是 Number 等等
  const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为')
    if (tagName !== null) {
      setTags([...tags, tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if (index >= 0) {
      // 如果 tag 已经被选中，就复制所有没有被选中的 tag，作为新的 selectedTag
      // react 不推荐直接修改（vue可以
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li key={tag} onClick={
          () => onToggleTag(tag)
        } className={getClass(tag)}
        >{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}


export {TagsSection};