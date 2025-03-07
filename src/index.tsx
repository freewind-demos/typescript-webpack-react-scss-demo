import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from './Button'

ReactDOM.render(
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1>简单的Button组件</h1>
    <Button onClick={() => alert('按钮被点击了！')}>
      点击我
    </Button>
  </div>,
  document.getElementById('root')
)
