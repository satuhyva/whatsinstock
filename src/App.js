import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import ProductPageToggler from './components/ProductPageToggler'
import ProductList from './components/ProductList'
import StockStatusIconInfo from './components/StockStatusIconInfo'
import createStyles from './warehouseStyles'
import {  fetchAndSetProductAndManufacturerData, updateProductAndManufacturerData } from './helperFunctions/fetchDataFunctions'


const App = () => {

    const [jackets, setJackets] = useState(null)
    const [shirts, setShirts] = useState(null)
    const [accessories, setAccessories] = useState(null)

    const [availabilities, setAvailabilities] = useState(null)
    const [selectedProductGroup, setSelectedProductGroup] = useState(null)

    const classes = createStyles()
    const UPDATE_INTERVAL = 1000 * 60 * 5


    // Fetch data for the first time; show product list before item availability is known.
    useEffect(() => {
        fetchAndSetProductAndManufacturerData(setJackets, setShirts, setAccessories, setAvailabilities)
    }, [])


    // Update product and availability data later (every 5 minutes when API internal cache is refreshed.)
    useEffect(() => {
        const interval = setInterval(() => {
            updateProductAndManufacturerData(setJackets, setShirts, setAccessories, setAvailabilities)
        }, UPDATE_INTERVAL )
        return () => clearInterval(interval)
    }, [UPDATE_INTERVAL])


    return (
        <div className={classes.app}>

            <Typography variant='h5'>
                WHAT'S IN STOCK?
            </Typography>
            <Typography>Toggle to select a product group</Typography>
            <ProductPageToggler selectedProductGroup={selectedProductGroup} setSelectedProductGroup={setSelectedProductGroup}/>

            {selectedProductGroup === 'jackets' && jackets !== null && <ProductList products={jackets} availabilities={availabilities}/>}
            {selectedProductGroup === 'shirts' && shirts !== null && <ProductList products={shirts} availabilities={availabilities}/>}
            {selectedProductGroup === 'accessories' && accessories !== null && <ProductList products={accessories} availabilities={availabilities}/>}

            {selectedProductGroup !== null &&
                <>
                    <Typography>Scroll down to view more items</Typography>
                    <StockStatusIconInfo/>
                </>
            }
        </div>
    )
}


export default App