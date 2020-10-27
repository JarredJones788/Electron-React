import { exec } from 'child_process'
import net from 'net'

const port = 3000

process.env.ELECTRON_START_URL = `http://localhost:${port}`

const client = new net.Socket()

let startedElectron = false
const tryConnection = () => {
  client.connect({ port }, () => {
    client.end()
    if (!startedElectron) {
      console.log('starting electron')
      startedElectron = true
      const electron = exec('npm run electron')
      if (electron.stdout !== null) {
        electron.stdout.on('data', (data) => {
          console.log(data)
        })
      }

    }
  })
}

tryConnection()

client.on('error', () => {
  setTimeout(tryConnection, 1000)
})