const fs = require('fs')
const globby = require('globby')

const aArticles = globby.sync(['**/*.md', '!*.md'], { gitignore: true })

const oArticleCatalog = aArticles.reduce(function(target, v, currentIndex) {
  const arr = v.split('/')
  const root = arr[0]
  const name = arr[arr.length - 1].split('.')[0]
  const item = `  - [${name}](/${v})`
  if (target[root]) {
    target[root].push(item)
  } else {
    target[root] = [item]
  }
  return target
}, {})

let temp = fs.readFileSync('./catalog-template.md', 'utf8')
for (const key in oArticleCatalog) {
  if (oArticleCatalog.hasOwnProperty(key)) {
    const list = oArticleCatalog[key]
    const reg = new RegExp(`\\$${key}\\$`)
    temp = temp.replace(reg, list.join('\n'))
  }
}

fs.writeFile('README.md', temp, 'utf8', function(err) {
  if (err) console.log('生成README出错：' + err)
})
