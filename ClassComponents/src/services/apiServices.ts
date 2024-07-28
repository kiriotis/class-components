import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iWarsResponse } from '../interfaces/start-wars.interface';

export const ServerApi = createApi({
    reducerPath: 'startWarsAPI',
    tagTypes: ['startWarsAPI'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        search: builder.mutation<iWarsResponse, string>({
            query: (searchText) => `people?search=${searchText}`,
        }),
    }),
});

export const { useSearchMutation } = ServerApi;
