import 'zx/globals'

interface ITechnology {
  d?: string // description
  w?: string // website
  i?: string // icon
}

const run = async () => {
  const techDir = path.join(__dirname, './technologies')
  // read files
  const files = (await fs.readdir(techDir))
    .filter((file) => {
      return file.endsWith('.json')
    })
    .map((file) => {
      const absolutePath = path.join(techDir, file)
      return absolutePath
    })
  const techData: Record<string, ITechnology> = {}
  files.forEach((file) => {
    const json = require(file)
    Object.entries(json).forEach(([key, value]) => {
      const v = value as any
      techData[key] = {
        d: v?.description,
        w: v?.website,
        i: v?.icon,
      }
    })
  })
  // write
  const writePath = path.join(__dirname, '../src/data/techData.ts')
  await fs.writeFile(
    writePath,
    /* ts */`
// @ts-nocheck

// Refer: https://github.com/wappalyzer/wappalyzer/tree/master/src/technologies

export interface ITechnology {
  d?: string // description
  i?: string // icon
  n?: string // name
}

export type TechData = Record<string, ITechnology>

const handleData = (data: TechData) => {
  Object.entries(data).forEach(([key, value]) => {
    // add cdn prefix
    if (value.i) {
      value.i = \`https://cdn.jsdelivr.net/gh/wappalyzer/wappalyzer/src/drivers/webextension/images/icons/\${value.i}\`
    }
  })
  return data
}

// count: ${Object.keys(techData).length}
const originData: Record<string, ITechnology> = ${JSON.stringify(
      techData,
      null,
      2
    )}

export const data = handleData(originData)
`.trimStart(),
    'utf-8'
  )
}

run()
