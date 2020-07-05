# DV学习笔记

## 预备知识

+ 图表库
  + echarts、highcharts、chartist、chart.js
+ 地图库
  + MapBox、Leaflet、Deck.gl、CesiumJS
+ 渲染库
  + SpriteJS、SpriteJS3D扩展、ThreeJS、BabylonJS
+ 数据驱动框架
  + D3.js

## 图形基础

**浏览器中实现可视化的四种方式**
+ HTML+CSS
+ SVG
+ Canvas2D
+ WebGL

**Canvas**
+ 画布宽高 决定Canvas坐标系
+ 样式宽高 决定其页面上呈现的大小
+ Canvas API
  1. 设置状态 (图形颜色fillStyle、线宽、坐标变换etc.)
  2. 绘制指令 (beginPatn、rect、arc、fill、fillText)

*使用Canvas*
```js
// Step1: 获取 Canvas 对象
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
/** save --->>> */
context.save()  // 暂存状态
// Step2: 设置绘图状态 (设置填充色fillStyle、平移变换translate)
const rectSize = [100, 100]
context.fillStyle = 'red'
context.translate(-0.5 * rectSize[0], -0.5 * rectSize[1]) // 平移 Canvas 画布
// Step3: 调用beginPath开始绘制图形
context.beginPath()
// Step4: 调用绘图指令，比如rect绘制矩形
context.rect(0.5 * canvas.width, 0.5 * canvas.height, ...rectSize)
// Step5: 调用fill指令，将绘制内容输出到画布上
context.fill()
/** --->>> restore */
context.restore() // 恢复状态
```

**SGV**
+ xmlns 命名空间
+ `<circle>`
