// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
      baseUrl: 'http://103.145.138.54:3232/v1/',
      headers:{
          "Content-Type": "application/json",
          authorization:`Bearer ${localStorage.getItem("token")}`
      }
     
     }),
     tagTypes:[],
  endpoints: () => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
  }),
})