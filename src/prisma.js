import { Prisma } from 'prisma-binding'
const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

// prisma.query  prisma.mutation  prisma.subscription  prisma.exists

prisma.query.users(null, '{id name posts { id title }}').then((data) => {
  console.log(JSON.stringify(data, undefined, 4))
})

prisma.query.comments(null, '{id text author {name} post {id}} ').then((data) => {
  console.log(JSON.stringify(data, undefined, 4))
})
