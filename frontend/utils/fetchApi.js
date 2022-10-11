

import React from 'react'

import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-key': '51f637db99msh8b7421b6d0a87a9p1466a8jsn0a5220aa72fc',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}
