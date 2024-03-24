import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({baseUrl: 'http://65.2.26.112:5000', credentials: 'include'})

export const apiSlice = createApi({
    baseQuery,
    tagTypes : ['User','Admin'],
    endpoints : (builder)=>({})
});