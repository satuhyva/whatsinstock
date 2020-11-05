import React from 'react'
import ProductListRow from './ProductListRow'
import { FixedSizeList as List } from 'react-window'
import Typography from '@material-ui/core/Typography'


const ProductList = ({ products, availabilities }) => {

    const WIDTH = Math.min(window.innerWidth * 0.9, 300)
    const HEIGHT = window.innerHeight * 0.55
    const ITEM_HEIGHT = 46

    if (products.error) {
        return (
            <Typography>{products.error}</Typography>
        )
    }

    const Row = ({ index, style }) => {
        const product = products[index]
        const status = availabilities === null || availabilities[product.id] === undefined ?
            null
            :
            availabilities[product.id]
        return (
            <div style={style}>
                <ProductListRow key={product.id} product={product} stockStatus={status} />
            </div>
        )
    }

    return (
        <div style={{ margin: 5 }}>
            <List
                className="List"
                height={HEIGHT}
                itemCount={products.length}
                itemSize={ITEM_HEIGHT}
                width={WIDTH}
            >
                {Row}
            </List>
        </div>
    )
}

export default ProductList





