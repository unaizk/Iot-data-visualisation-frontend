import { apiSlice } from "./apiSlice";

const USER_URL = '/api/users';


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (data) =>({
                url : `${USER_URL}/auth`,
                method : 'POST',
                body : data
            })
        }),
        register : builder.mutation({
            query:(data)=>({
                url : `${USER_URL}`,
                method : 'POST',
                body : data
            })
        }),
        logout : builder.mutation({
            query : ()=>({
                url : `${USER_URL}/logout`,
                method : 'POST'
            })
        }),
        iotData : builder.mutation({
            query : ()=>({
                url : `${USER_URL}/iot-datas`,
                method : 'GET'
            })
        }),
    
    })
})


export const {useLoginMutation, useRegisterMutation, useLogoutMutation, useIotDataMutation} = userApiSlice