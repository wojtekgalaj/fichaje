const users = async (_, args, ctx) => {
  console.log('users resolver called')
  return [
    {
      name: 'Puche',
      __typename: 'User'
    },
    {
      name: 'Javi',
      __typename: 'User'
    }
  ]
}

const deleteUser = async () => {
  return [
    {
      name: 'Puche',
      __typename: 'User'
    }
  ]
}

export default {
  Query: {
    users
  }
}
