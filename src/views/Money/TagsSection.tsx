import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';

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

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props) => {
  // useState<类型>(参数)
  // 优点: 参数为空时, ts可以判断出参数的类型
  // useState<string[]>([])
  // tags.map(tag => ... ) ts可以判断出tag是 String，而不是 Number 等等
  const {tags, setTags} = useTags()
  // const [setSelectedTags] = useState<string[]>([])
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签的名称为')
    if (tagName !== null) {
      setTags([...tags, {id: Math.random(), name: tagName}])
    }
  }
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    if (index >= 0) {
      // 如果 tag 已经被选中，就复制所有没有被选中的 tag，作为新的 selectedTag
      // react 不推荐直接修改（vue可以
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      props.onChange([...selectedTagIds, tagId])
    }
  }
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)}
              className={getClass(tag.id)}
        >{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}


export {TagsSection};