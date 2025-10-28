import 'dotenv/config'

import { createRequire } from 'module'
globalThis.require = createRequire(import.meta.url)

import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { promises as fs } from 'node:fs'

// Import du handler SSR
const { handler } = await import('./.output/server/index.mjs')

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '.output/public')

import { extname } from 'path'

function getContentType(filePath) {
    const ext = extname(filePath).toLowerCase()

    switch (ext) {
        case '.html': return 'text/html'
        case '.js': return 'application/javascript'
        case '.mjs': return 'application/javascript'
        case '.ts': return 'application/typescript'
        case '.json': return 'application/json'
        case '.css': return 'text/css'
        case '.svg': return 'image/svg+xml'
        case '.png': return 'image/png'
        case '.jpg':
        case '.jpeg': return 'image/jpeg'
        case '.gif': return 'image/gif'
        case '.ico': return 'image/x-icon'
        case '.webp': return 'image/webp'
        case '.woff': return 'font/woff'
        case '.woff2': return 'font/woff2'
        case '.ttf': return 'font/ttf'
        case '.eot': return 'application/vnd.ms-fontobject'
        case '.mp4': return 'video/mp4'
        case '.webm': return 'video/webm'
        default: return 'application/octet-stream' // fallback générique
    }
}



const server = createServer(async (req, res) => {
    const url = req.url || '/'

    // 2️⃣ Sert tous les fichiers statiques front (/_nuxt, /assets, favicon)
    if (
        url.startsWith('/_nuxt') ||
        url.startsWith('/assets') ||
        url.startsWith('/favicon') ||
        url.startsWith('/logo') ||
        url.startsWith('/images')
    ) {
        try {
            const filePath = join(publicDir, decodeURIComponent(url))
            const content = await fs.readFile(filePath)
            const contentType = getContentType(filePath)
            res.writeHead(200, { 'Content-Type': contentType })
            return res.end(content)
        } catch (e) {
            console.error('Static file not found:', url)
            res.writeHead(404)
            return res.end()
        }
    }

    // 3️⃣ Passe toutes les autres requêtes au handler SSR
    try {
        await handler(req, res)
    } catch (err) {
        console.error('SSR error:', err)
        res.writeHead(500)
        res.end('Internal Server Error')
    }
})

server.listen(process.env.PORT, () => {
    console.log(`✅ Nitro server running at http://localhost:${process.env.PORT}`)
})
