import { baseApi } from '@/services/base-api'
import {
  CreateCardsArgs,
  CreateDeckArgs,
  Deck,
  Gard,
  GetCardsArgs,
  GetDecksArgs,
  GetDesksResponse,
} from '@/services/decks/decks.types'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCards: builder.mutation<Gard, CreateCardsArgs & { id: string }>({
        invalidatesTags: ['Decks'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/decks/${args.id}/cards`,
          }
        },
      }),
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      deleteDecks: builder.mutation<Omit<Deck, 'author'>, { id: string }>({
        query: args => {
          return {
            body: args,
            method: 'DELETE',
            url: `v1/decks/${args.id}`,
          }
        },
      }),
      getCards: builder.query<Omit<GetDesksResponse, 'maxCardsCount'>, GetCardsArgs>({
        providesTags: ['Decks'],
        query: params => {
          return {
            params: params ?? {},
            url: `v1/decks/${params.id}/cards`,
          }
        },
      }),
      getDecks: builder.query<GetDesksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: params => {
          return {
            params: params ?? {},
            url: `v1/decks`,
          }
        },
      }),
      getDecksById: builder.query<Deck, { id: string }>({
        query: params => {
          return {
            url: `v1/decks/${params.id}`,
          }
        },
      }),
      getLearnCards: builder.query<Gard, { id: string; previousCardId: string }>({
        query: args => {
          return {
            body: args,
            url: `v1/decks/${args.id}/learn`,
          }
        },
      }),
      submitGrade: builder.mutation<void, { cardId: string; grade: number; id: string }>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `v1/decks/${args.id}/learn`,
          }
        },
      }),
      updateDecksById: builder.mutation<Deck, CreateDeckArgs & { id: string }>({
        query: args => {
          return {
            body: args,
            method: 'PATCH',
            url: `v1/decks/${args.id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDecksByIdQuery,
  useGetDecksQuery,
  useGetLearnCardsQuery,
  useSubmitGradeMutation,
  useUpdateDecksByIdMutation,
} = decksService
