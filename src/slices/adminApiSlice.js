import { apiSlice } from "./apiSlice";



export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        adminLogin : builder.mutation({
            query:(data)=>({
                url : `/api/admin/auth`,
                method : 'POST',
                body : data
            })
        }),
        adminRegister : builder.mutation({
            query:(data)=>({
                url : `/api/admin/`,
                method : 'POST',
                body : data
            })
        }),
        adminLogout : builder.mutation({
            query : ()=>({
                url : `/api/admin/logout`,
                method : 'POST'
            })
        }),

    })
})

export const  {useAdminLoginMutation , useAdminLogoutMutation , useAdminRegisterMutation} = adminApiSlice