const express = require('express')
const cors = require('cors')

const mockToken =
  'e9f83342e47d658b9c64a02fc6503c2736d333d151595b273b525653ba1cebc2'
const mockUser = {
  id: 1,
  name: 'Mew K.',
  email: 'mewAdmin@mailsac.com',
  branchCode: 'Branch1',
}

const app = express()
const router = express.Router();

app.use(cors())
app.use(express.json())

router.get('/me', (req, res) => {
  return res.status(200).json({
    data: {
      user: mockUser
    }
  });
})
router.post('/login', (req, res) => {
  const { email, password } = req.body

  if (email === 'mewAdmin@mailsac.com' && password === '123456') {
    return res.status(200).json({
      data: {
        user: mockUser,
        token: mockToken,
      }
    })
  } else {
    return res.status(401).json({ message: 'Invalid username or password' })
  }
})

app.use('/api', router);
app.listen(8888, () => {
  console.log('Mock API start on port 8888');
});


module.exports = {
  path: '/api',
  handler: app,
}