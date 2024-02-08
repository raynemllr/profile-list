import { delay } from './utils'

export interface User {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

export interface Street {
  number: number
  name: string
}

export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Timezone {
  offset: string
  description: string
}

export interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export interface Dob {
  date: string
  age: number
}

export interface Registered {
  date: string
  age: number
}

export interface Id {
  name: string
  value: string
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export async function getUsers({
  query,
  limit = 20
}: {
  query?: string
  limit?: number
}) {
  // * Added a delay to see the loading state of each pages
  await delay(1000)

  const response = await fetch(`https://randomuser.me/api?results=${limit}`, {
    method: 'GET'
  })

  const data = await response.json()

  const filteredUsers = await data.results.filter((user: User) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()

    if (query) {
      return fullName.includes(query.toLowerCase())
    }

    return data
  })

  return filteredUsers
}

export async function getUser(id: string) {
  const users = await getUsers({})

  const user = users.filter((user: User) => user.login.uuid === id)

  return user
}
