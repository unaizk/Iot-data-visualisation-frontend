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
        userList : builder.mutation({
            query : ()=>({
                url : `/api/admin/usersList`,
                method : 'GET'
            })
        }),
        userEdit : builder.mutation({
            query : (data)=>({
                url : `/api/admin/update-user`,
                method : 'PUT',
                body : data
            })
        }),
        userDelete : builder.mutation({
            query : (data)=>({
                url : `/api/admin/delete-user`,
                method : 'DELETE',
                body : data
            })
        }),

    })
})

export const  {useAdminLoginMutation , useAdminLogoutMutation , useAdminRegisterMutation, useUserListMutation, useUserEditMutation, useUserDeleteMutation} = adminApiSlice