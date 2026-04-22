import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
    }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "users",
            providesTags: ["Users"],
        })
    })
})

export const { useGetUsersQuery } = usersApi;