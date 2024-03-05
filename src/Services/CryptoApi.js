import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query"



const cryptoApiHeader = {
    'X-RapidAPI-Key': '08e991f25fmshfe95ffa71195ec2p12825ejsne853749eb2b2',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url)=> ({ url, headers: cryptoApiHeader})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:()=> createRequest('/exchanges')
        })
    })
});
