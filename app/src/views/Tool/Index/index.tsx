import React, { useState } from 'react'
import LayoutMain from '../../../components/LayoutMain'
import ReactMarkdown from 'react-markdown'

import './index.scss'

const ToolIndex = () => {
  const [value, setValue] = useState(`# Markdown\n
> Markdown Editor\n
## 1. 列表\n
### 1.1 无序列表\n
- Apple
- Banana
- Orange\n
### 1.2 有序列表\n
1. Apple
1. Banana
1. Orange\n
## 2. 代码\n
\`\`\`
const queryUser = (name: string, age: number) => { name, age }
\`\`\`
## 3. 样式\n
~~删除线（开启识别HTML标签时）~~\n
_斜体字_\n
__粗体__\n
___粗斜体___\n
## 4. 表格
| Name      | Age | City      |
| --------- | --- | ----      |
| Ming      | 1   | ShangHaii |
| Hua       | 3   | BeiJing   |
| Wei       | 6   | ShenZhen  |\n
## 5. 链接
[LeeLean](https://github.com/leeleanlean)`)

  const onChange = (e: { target: { value: any } }) => {
    setValue(e.target.value)
  }
  return (
    <LayoutMain className={'markdown'}>
      <div className="left">
        <textarea
          value={value}
          onChange={ onChange }
        />
      </div>
      <div className="right">
        <ReactMarkdown source={value} />
      </div>
    </LayoutMain>
  )
}
export default ToolIndex
