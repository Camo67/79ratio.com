import fs from "node:fs"
import path from "node:path"

const root = ".open-next"
const assetsDir = path.join(root, "assets")

const copyDir = (src, dest) => {
  if (!fs.existsSync(src)) return
  fs.mkdirSync(dest, { recursive: true })

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

if (fs.existsSync(assetsDir)) {
  for (const entry of fs.readdirSync(assetsDir, { withFileTypes: true })) {
    const srcPath = path.join(assetsDir, entry.name)
    const destPath = path.join(root, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

const workerSrc = path.join(root, "worker.js")
const workerDest = path.join(root, "_worker.js")

if (fs.existsSync(workerSrc)) {
  fs.copyFileSync(workerSrc, workerDest)
}
