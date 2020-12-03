const fs = require('fs')

const htmlText = fs.readFileSync('./docs/index.html', 'utf8')

fs.writeFile('README.md', htmlText, 'utf8', function(err) {
  if (err) console.log('生成README出错：' + err)
})
