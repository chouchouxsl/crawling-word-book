const fs = require('fs/promises')
const path = require('path')
const axios = require('axios')
const minimist = require('minimist')(process.argv.slice(2))
const rawData = require('./RawData.json')

const resolve = (name) => path.resolve(__dirname, name)

let curItem = null
const dirName = 'word-book'

if (!minimist.name || typeof minimist.name === 'boolean') {
  throw new Error('请输入name值')
}

let falg = false
for (const item of rawData) {
  if (item.name === minimist.name.trim()) {
    falg = true
    curItem = item
  }
}

if (!falg) {
  throw new Error('name输入有误, 请重新输入!')
}

const exitsFolder = async (reaPath) => {
  const absPath = resolve(reaPath)
  try {
    await fs.stat(absPath)
  } catch (e) {
    // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
    await fs.mkdir(absPath, { recursive: true })
  }
}

const setup = async () => {
  try {
    const url = `https://kaiyiwing.gitee.io/qwerty-learner/dicts/${curItem.alias}.json`
    const { data } = await axios.get(url)
    console.log('🤪 文件爬取成功。')
    const str = data.map(item => item.name).join('\n')
    await exitsFolder(dirName)
    await fs.writeFile(`${__dirname}/${dirName}/${curItem.name}.txt`, str, 'utf-8')
    console.log('🤪 文件写入成功。')
  } catch (error) {
    console.log('🤪 error >>:', error)
  }
}

setup()
