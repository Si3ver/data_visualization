void function draw() {
  console.log('draw!')
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
  // context.arc(0.5 * canvas.width, 0.5 * canvas.height, 100, 0, 2 * Math.PI)
  // Step5: 调用fill指令，将绘制内容输出到画布上
  context.fill()
  /** --->>> restore */
  context.restore() // 恢复状态
}()