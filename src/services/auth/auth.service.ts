import {
  LoginArgs,
  ResendVerificationEmailArgs,
  SingUpArgs,
  UserData,
} from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<UserData, void>({
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
      login: builder.mutation<void, LoginArgs>({
        invalidatesTags: ['Me'],
        query: body => {
          return {
            body,
            method: 'POST',
            url: `/v1/auth/login`,
          }
        },
      }),
      logout: builder.mutation<void, void>({
        query: () => {
          return {
            method: 'POST',
            url: `v1/auth/logout`,
          }
        },
      }),
      recoverPassword: builder.mutation<void, { email: string; html?: string; subject?: string }>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: `v1/auth/recover-password`,
          }
        },
      }),
      resendVerificationEmail: builder.mutation<void, ResendVerificationEmailArgs>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: `v1/auth/resend-verification-email`,
          }
        },
      }),
      singUp: builder.mutation<UserData, SingUpArgs>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: `/v1/auth/sign-up`,
          }
        },
      }),
      updateMe: builder.mutation<UserData, { avatar?: string; name?: string }>({
        query: body => {
          return {
            body,
            method: 'PATCH',
            url: `v1/auth/me`,
          }
        },
      }),
      verifyEmail: builder.mutation<void, { code: string }>({
        query: body => {
          return {
            body,
            method: 'POST',
            url: `v1/auth/verify-email`,
          }
        },
      }),
    }
  },
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useResendVerificationEmailMutation,
  useSingUpMutation,
  useUpdateMeMutation,
  useVerifyEmailMutation,
} = authService
