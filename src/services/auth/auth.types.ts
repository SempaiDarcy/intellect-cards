export type Author = {
  id: string
  name: string
}

export type User = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type SingUpArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type ResendVerificationEmailArgs = {
  html?: string
  subject?: string
  userId: string
}

export type RecoverPasswordArgs = {
  email: string
  subject?: string
}

export type ResetPasswordArgs = {
  password: string
  token: string
}
