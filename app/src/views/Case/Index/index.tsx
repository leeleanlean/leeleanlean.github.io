import React from 'react'
import { Table } from 'antd'
import LayoutMain from '../../../components/LayoutMain'

const dataSource = [
  {key: '', name: 'Alin', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'dlddld', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'f2e', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'itJp', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'jianYue', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'junqumenzhen', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'lantian', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'lilaoda', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'model', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'molipopo', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'qisu', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'qisu1', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'qiugougongying', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'rryinxiang', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'Ui', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'zhenYa', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'yingzhijie', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'yiyuanyungou', type: 'HTML+CSS', date: '2020-01-01'},
  {key: '', name: 'yongxing', type: 'HTML+CSS', date: '2020-01-01'}
]
const columns = [
  {
    title: '序号',
    width: 65,
    render:(text: any, record: any, index: number)=> `${index+1}`,
  },
  {
    title: '名称',
    width: 300,
    dataIndex: 'name'
  },
  {
    title: '类型',
    dataIndex: 'type'
  },
  {
    title: '日期',
    dataIndex: 'date'
  },
]
const pagination = {
  defaultPageSize: 20
}
const CaseIndex = () => {
  return (
    <LayoutMain title={'静态页面'}>
      <Table dataSource={dataSource} columns={columns} bordered pagination={pagination} />
    </LayoutMain>
  )
}
export default CaseIndex