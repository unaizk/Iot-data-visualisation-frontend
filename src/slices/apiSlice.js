import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({baseUrl: 'https://iot-data-backendd.unaizk.com', credentials: 'include'})

export const apiSlice = createApi({
    baseQuery,
    tagTypes : ['User','Admin'],
    endpoints : (builder)=>({})
});