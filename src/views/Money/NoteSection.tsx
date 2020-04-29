import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`

const NoteSection: React.FC = (props) => {

  const [note, setNote] = useState('')
  const refInput = useRef<HTMLInputElement>(null)

  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value)
    }
  }

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        {/* 受控组件
        <input type="text" placeholder="在这里添加备注"
               value={note}
               onChange={(e) => setNote(e.target.value)}
        />*/}
        {/* 非受控组件 */}
        <input type="text" placeholder="在这里添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      {/* React onChange 和 HTML onChange 是不一样的
        React onChange 在你输入一个字的时候就触发
        HTML onChange 在你鼠标一走的时候触发,早于 onBlur
      */}
      </label>
    </Wrapper>
  )
}

export {NoteSection};