import { UserInterface } from '../user'

export interface RegisterHttpParams {
  name: string
  email: string
  password: string
  //   avatarUrl: string
  //   phone: string
}

export interface RegisterHttpResponse {
  //   user: UserInterface
  user: {
    id: number
    name: string
    email: string
    createdAt: string
    updatedAt: string
    deletedAt: string
  }
  token: string
  //   refreshToken: string
}
