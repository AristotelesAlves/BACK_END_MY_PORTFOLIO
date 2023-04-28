import express from 'express'
import { router } from './router'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(4444, () => console.log('server is running on port 4444'))