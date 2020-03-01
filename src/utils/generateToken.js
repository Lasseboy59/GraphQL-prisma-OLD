import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
  return jwt.sign({ userId }, 'thisisasecret', { expiresIn: '1 hour' })

}

export { generateToken as default }