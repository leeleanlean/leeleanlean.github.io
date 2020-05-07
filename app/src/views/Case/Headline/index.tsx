import React from 'react'
import { List, Card } from 'antd'

import LayoutMain from '../../../components/LayoutMain'

const dataSource = [
  { title: '今日头条', }
]

const CaseHeadline = () => {
  return (
    <LayoutMain title={'头条号'}>
      <div className="case-headline">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={dataSource}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <div className="left">left</div>
                <div className="right">right</div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </LayoutMain>
  )
}
export default CaseHeadline