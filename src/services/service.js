import axios from 'axios'

const baseUrl = 'https://bad-api-assignment.reaktor.com'


export const fetchProductData = async (productGroup) => {
    const response = await axios.get(`${baseUrl}/products/${productGroup}`)
    return response.data
}

// user config when testing API malfunctioning
export const fetchManufacturerData = async (manufacturer) => {
    // let config = {
    //     headers: {
    //         'x-force-error-mode': 'all',
    //     },
    // }
    const response = await axios.get(`${baseUrl}/availability/${manufacturer}`)
    // const response = await axios.get(`${baseUrl}/availability/${manufacturer}`, config)
    return response.data
}



