import React from 'react'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import createStyles from '../warehouseStyles'
import ColorDots from './ColorDots'




const ProductListRow = ({ product, stockStatus }) => {

    const classes = createStyles()

    let productDetails = ''
    if (product.price) productDetails = productDetails.concat(product.price, '€   ')
    if (product.manufacturer) productDetails = productDetails.concat('(', product.manufacturer, ')')


    return (
        <div className={classes.productRow}>
            {stockStatus === null ?
                <HelpOutlineIcon/>
                :
                stockStatus ?
                    <RadioButtonCheckedIcon className={classes.inStock}/>
                    :
                    <RadioButtonUncheckedIcon className={classes.outOfStock}/>
            }
            <div className={classes.productDetailsBox}>
                <div>{product.name}</div>
                <div className={classes.productDetailsContainer}>
                    {productDetails}
                    <ColorDots product={product}/>
                </div>
            </div>
        </div>
    )
}

export default ProductListRow
