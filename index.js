const fs = require('fs/promises');
const path = require('path');
const axios = require('axios');

const resolve = (name) => path.resolve(__dirname, name)

const wordbook = 'it-words'
const dirName = 'word-book'
const url = `https://kaiyiwing.gitee.io/qwerty-learner/dicts/${wordbook}.json`

const exitsFolder = async (reaPath) => {
  const absPath = resolve(reaPath);
  try {
    await fs.stat(absPath)
  } catch (e) {
    // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
    await fs.mkdir(absPath, { recursive: true })
  }
}

const setup = async () => {
  try {
    const { data } = await axios.get(url)
    console.log('🤪 文件爬取成功。')
    const str = data.map(item => item.name).join('\n')
    await exitsFolder(dirName)
    await fs.writeFile(`${__dirname}/${dirName}/${wordbook}.txt`, str, 'utf-8')
    console.log('🤪 文件写入成功。')
  } catch (error) {
    console.log('🤪 error >>:', error)
  }
}

setup()
