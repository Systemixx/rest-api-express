import express, { Request, Response } from 'express'

// we define our server and port

const app = express()
const port = 3000

// http-request: method (GET, POST, ...), URL (path)
// this structure is used by express
app.get('/', (req: Request, res: Response) => {
  res.send('Hallo Welt! Ich bin ein Express-Server')
})

app.get('/info', (req: Request, res: Response) => {
  res.send('GET - Wir haben heute viel über APIs und HTTP gelernt.')
})

app.post('/info', (req: Request, res: Response) => {
  res.send('POST - Deine Post Anfrage ist angekommen!')
})


// start our server

app.listen(port, () => {
  console.log(`Server is runnig at http://localhost:${port}`)
})

