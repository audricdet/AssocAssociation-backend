// IMPORT PACKAGES
import express from 'express'
import client from './src/db/connect.mjs' 
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'


//IMPORT ROUTERS

import loginRouter from './src/api/auth/login.mjs'
import registerRouter from './src/api/auth/register.mjs'
import logoutRouter from './src/api/auth/logout.mjs'

// IMPORT MIDDLEWARE

import auth from './src/middleware/verifyToken.mjs'

//IMPORT CONTROLLERS

import getProfileInfos from './controllers/getProfileInfos.mjs'
import insertProfileInfos from './controllers/insertProfileInfos.mjs'
import getAllAssociations from './controllers/getAllAssociations.mjs'
import getAssociationInfos from './controllers/getAssociationInfos.mjs'


const app = express() 
const PORT = 3000
const router = express.Router()


//CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

//USE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.json())


//CLASSIC 
app.use('/', loginRouter)
app.use('/', registerRouter)
app.use('/logout', auth, logoutRouter)

// REQUEST
//GET 

app.get('/profile/:user_id', auth, getProfileInfos)
app.get('/associations', auth, getAllAssociations)
app.get('/associations/:id', auth, getAssociationInfos)

//POST 

app.post('/insertProfileInfos', auth, insertProfileInfos)

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(process.env.PORT || 3000, () => {
    console.log('AssocAssociation app listening on port 3000!');
});