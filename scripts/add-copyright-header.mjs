/**
 * Copyright (c) 2024-2026 Beaver IM Team
 * SPDX-License-Identifier: MIT
 * Project: beaver-docs
 * https://github.com/wsrh8888/beaver-docs
 *
 * 批量为文档站 .md / .ts / .vue / .js 添加或更新文件头版权注释（中英双语）。
 * 用法（仓库根目录）: node scripts/add-copyright-header.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')

const MARKER = 'SPDX-License-Identifier: MIT'
const HEADER_VERSION = 'beaver-docs-header-v1'
const PROJECT = 'beaver-docs'
const REPO_URL = 'https://github.com/wsrh8888/beaver-docs'

const TS_HEADER = `/**
 * Copyright (c) 2024-2026 Beaver IM Team
 * SPDX-License-Identifier: MIT
 * Project: ${PROJECT}
 * ${REPO_URL}
 *
 * 中文：
 * 本文件为海狸 IM（Beaver IM）开源项目源代码。
 * 版权所有 © 2024-2026 Beaver IM Team，基于 MIT 协议授权。
 * 禁止删除、篡改或替换本文件头部版权与许可声明。
 * 使用与商业授权说明：https://wsrh8888.github.io/beaver-docs/community/license.html
 *
 * English:
 * This file is part of the Beaver IM open-source project.
 * Copyright (c) 2024-2026 Beaver IM Team. Licensed under the MIT License.
 * Do not remove, alter, or replace this copyright and license header.
 * Usage & commercial licensing: https://wsrh8888.github.io/beaver-docs/community/license.html
 *
 * ${HEADER_VERSION}
 */

`

const MD_HEADER = `<!--
  Copyright (c) 2024-2026 Beaver IM Team
  SPDX-License-Identifier: MIT
  Project: ${PROJECT}
  ${REPO_URL}

  中文：
  本文件为海狸 IM（Beaver IM）开源项目源代码。
  版权所有 © 2024-2026 Beaver IM Team，基于 MIT 协议授权。
  禁止删除、篡改或替换本文件头部版权与许可声明。
  使用与商业授权说明：https://wsrh8888.github.io/beaver-docs/community/license.html

  English:
  This file is part of the Beaver IM open-source project.
  Copyright (c) 2024-2026 Beaver IM Team. Licensed under the MIT License.
  Do not remove, alter, or replace this copyright and license header.
  Usage & commercial licensing: https://wsrh8888.github.io/beaver-docs/community/license.html

  ${HEADER_VERSION}
-->

`

const EXT_SET = new Set(['.md', '.ts', '.vue', '.js', '.mjs', '.cjs'])
const SKIP_DIRS = new Set(['node_modules', 'dist', 'build', '.git', 'public', 'cache'])
const SKIP_NAMES = new Set(['LICENSE.md', 'CHANGELOG.md', 'SECURITY.md', 'CONTRIBUTING.md'])

const TS_HEADER_RE = /^(\uFEFF)?(?:#!.*\r?\n)?\/\*\*[\s\S]*?\*\/\s*/
const MD_HEADER_RE = /^(\uFEFF)?<!--[\s\S]*?-->\s*/
const FRONTMATTER_RE = /^(---\r?\n[\s\S]*?\r?\n---\r?\n)/

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue
      walk(full, files)
      continue
    }
    if (!EXT_SET.has(path.extname(name))) continue
    if (SKIP_NAMES.has(name)) continue
    files.push(full)
  }
  return files
}

function stripBom(content) {
  return content.charCodeAt(0) === 0xFEFF ? content.slice(1) : content
}

function isOurHeader(content) {
  const head = content.slice(0, 1600)
  return head.includes(MARKER) || /Copyright\s*\(c\)\s*20\d{2}.*Beaver/i.test(head)
}

function hasCurrentVersion(content) {
  return content.slice(0, 1600).includes(HEADER_VERSION)
}

function stripExistingMdHeader(body) {
  // 去掉 frontmatter 后紧跟的我们的 HTML 注释头
  const fm = body.match(FRONTMATTER_RE)
  if (fm) {
    let rest = body.slice(fm[0].length)
    if (MD_HEADER_RE.test(rest) && isOurHeader(rest)) {
      rest = rest.replace(MD_HEADER_RE, '')
    }
    return { frontmatter: fm[0], body: rest }
  }
  if (MD_HEADER_RE.test(body) && isOurHeader(body)) {
    return { frontmatter: '', body: body.replace(MD_HEADER_RE, '') }
  }
  return { frontmatter: '', body }
}

function stripExistingTsHeader(content) {
  let body = stripBom(content)
  let shebang = ''
  if (body.startsWith('#!')) {
    const nl = body.indexOf('\n')
    if (nl >= 0) {
      shebang = body.slice(0, nl + 1)
      body = body.slice(nl + 1)
    }
  }
  if (TS_HEADER_RE.test(body) && isOurHeader(shebang + body)) body = body.replace(TS_HEADER_RE, '')
  else if (TS_HEADER_RE.test(body) && isOurHeader(body)) body = body.replace(TS_HEADER_RE, '')
  if (isOurHeader(body) && body.trimStart().startsWith('/**')) {
    const end = body.indexOf('*/')
    if (end >= 0) body = body.slice(end + 2).replace(/^\r?\n+/, '')
  }
  return { shebang, body }
}

function injectHeader(filePath, content) {
  if (hasCurrentVersion(content)) return null
  const ext = path.extname(filePath)

  if (ext === '.md') {
    const raw = stripBom(content)
    const { frontmatter, body } = stripExistingMdHeader(raw)
    return `${frontmatter}${MD_HEADER}${body}`
  }

  const { shebang, body } = stripExistingTsHeader(content)
  return `${shebang}${TS_HEADER}${body}`
}

function main() {
  const files = walk(repoRoot)
  let changed = 0
  let skipped = 0
  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8')
    const next = injectHeader(file, original)
    if (next == null || next === original) {
      skipped += 1
      continue
    }
    changed += 1
    fs.writeFileSync(file, next, 'utf8')
    console.log(`updated: ${path.relative(repoRoot, file)}`)
  }
  console.log(`\nDone. files=${files.length}, updated=${changed}, skipped=${skipped}`)
}

main()
