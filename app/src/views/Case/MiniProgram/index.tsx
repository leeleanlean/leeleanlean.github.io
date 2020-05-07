import React, { useState } from 'react'
import { Row, Col, Card } from 'antd'
import LayoutMain from '../../../components/LayoutMain'

import './index.scss'

// 引入icon
import colldean from '../../../assets/images/Case/colldean.jpeg'
import colldeanIcon from '../../../assets/images/Case/colldean-icon.jpeg'
import colldeanErcode from '../../../assets/images/Case/colldean-ercode.jpg'
import quadrilateral from '../../../assets/images/Case/quadrilateral.jpeg'
import quadrilateralIcon from '../../../assets/images/Case/quadrilateral-icon.jpeg'
import quadrilateralErcode from '../../../assets/images/Case/quadrilateral-ercode.jpg'

const MiniProgram = () => {
  console.log('MiniProgram')
  const [programs, setPrograms] = useState([
    { name: '挑大梁', type: '游戏类工具', hover: false, desc: 'ios付费游戏免费玩', screen: colldean, ercode: colldeanErcode, icon: colldeanIcon},
    { name: '四边形', type: '教育类工具', hover: false, desc: '中小学古诗词大全赏析/朗诵', screen: quadrilateral, ercode: quadrilateralErcode, icon: quadrilateralIcon},
  ])
  const itemMouseEnter = (item:object, index:number) => {
    programs[index].hover = true
    setPrograms([...programs])
  }
  const itemMouseLeave = (item:object, index:number) => {
    programs[index].hover = false
    setPrograms([...programs])
  }
  return (
    <LayoutMain title={'小程序'}>
      <div className="case-miniprogram">
        <Row gutter={16}>
          {
            (programs || []).length ? programs.map((item, index) => {
            return <Col span={8} key={item.name}>
                <Card>
                  <div className="left">
                    <dl>
                      <dt><img src={item.icon} alt={item.desc}/></dt>
                      <dd>{item.name}</dd>
                    </dl>
                    <div className="desc">
                      <p className="type">{item.type}</p>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                  <div
                    className="right"
                    onMouseEnter={ () => itemMouseEnter(item, index) }
                    onMouseLeave={ () => itemMouseLeave(item, index) }>
                    {
                      item.hover
                        ? <img className="ercode" src={item.ercode} alt={item.desc}/>
                        : <img src={item.screen} alt={item.desc}/>
                    }
                  </div>
                </Card>
              </Col>
            }) : <div>None</div>
          }
        </Row>
      </div>
    </LayoutMain>
  )
}

export default MiniProgram