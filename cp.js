const fs = require('fs')

const htmlText = fs.readFileSync('./docs/index.html', 'utf8')

fs.writeFile('index.html', htmlText, 'utf8', function(err) {
  if (err) console.log('生成首页出错：' + err)
})
