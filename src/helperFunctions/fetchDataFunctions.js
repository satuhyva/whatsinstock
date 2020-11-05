import { fetchProductData, fetchManufacturerData } from '../services/service'


async function getProductDataSortAlphabetically(productGroup) {
    try {
        const fetchedData = await fetchProductData(productGroup)
        const sortedData = fetchedData.sort((a, b) => a.name.localeCompare(b.name))
        return sortedData
    } catch (error) {
        return { error: `Error in downloading ${productGroup} data.` }
    }
}

async function getManufacturerData(manufacturer) {
    try {
        const fetchedData = await fetchManufacturerData(manufacturer)
        if (fetchedData.response === '[]') return []
        return fetchedData.response
    } catch (error) {
        return []
    }
}


function getManufacturerSet(productGroups) {
    let manufacturers = new Set()
    productGroups.forEach(group => {
        group.forEach(item => {
            if (!item.error) {
                manufacturers.add(item.manufacturer)
            }
        })
    })
    return manufacturers
}

async function getIdManufacturerDictionary(manufacturers) {
    let promiseArray = []
    manufacturers.forEach(manufacturer => {
        promiseArray.push(getManufacturerData(manufacturer))
    })
    let idAndManufacturerDictionary = {}
    const allPromisesResolved = await Promise.all(promiseArray)
    allPromisesResolved.forEach(oneManufacturerResults => {
        oneManufacturerResults.forEach(itemData => {
            idAndManufacturerDictionary[itemData.id.toLowerCase()] = itemData.DATAPAYLOAD.toString().indexOf('>INSTOCK<') !== -1
        })
    })
    return idAndManufacturerDictionary
}



export async function fetchAndSetProductAndManufacturerData(setJackets, setShirts, setAccessories, setAvailabilities) {
    const jacketsData = await getProductDataSortAlphabetically('jackets')
    setJackets(jacketsData)
    const shirtsData = await getProductDataSortAlphabetically('shirts')
    setShirts(shirtsData)
    const accessoriesData = await getProductDataSortAlphabetically('accessories')
    setAccessories(accessoriesData)

    let manufacturers = getManufacturerSet([jacketsData, shirtsData, accessoriesData])
    const idManufacturerDictionary = await getIdManufacturerDictionary(manufacturers)
    setAvailabilities(idManufacturerDictionary)
}


export async function updateProductAndManufacturerData(setJackets, setShirts, setAccessories, setAvailabilities) {
    const jacketsData = await getProductDataSortAlphabetically('jackets')
    const shirtsData = await getProductDataSortAlphabetically('shirts')
    const accessoriesData = await getProductDataSortAlphabetically('accessories')
    let manufacturers = getManufacturerSet([jacketsData, shirtsData, accessoriesData])
    const idManufacturerDictionary = await getIdManufacturerDictionary(manufacturers)
    setJackets(jacketsData)
    setShirts(shirtsData)
    setAccessories(accessoriesData)
    setAvailabilities(idManufacturerDictionary)
}



