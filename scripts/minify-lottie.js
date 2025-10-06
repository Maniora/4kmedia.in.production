// Minify all Lottie JSON files in public/assets/illustrations in-place
import fs from 'fs'
import path from 'path'

const illustrationsDir = path.resolve(process.cwd(), 'public', 'assets', 'illustrations')

function minifyJsonFile(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    const json = JSON.parse(raw)
    const min = JSON.stringify(json)
    if (min.length < raw.length) {
      fs.writeFileSync(filePath, min, 'utf8')
      console.log(`Minified: ${path.basename(filePath)} (${raw.length} -> ${min.length} bytes)`) // eslint-disable-line no-console
    }
  } catch (e) {
    console.error(`Failed to minify ${filePath}:`, e) // eslint-disable-line no-console
  }
}

function run() {
  if (!fs.existsSync(illustrationsDir)) {
    console.warn('Illustrations directory not found, skipping minify') // eslint-disable-line no-console
    return
  }
  const files = fs.readdirSync(illustrationsDir).filter((f) => f.endsWith('.json'))
  files.forEach((f) => minifyJsonFile(path.join(illustrationsDir, f)))
}

run()


