import React from 'react'
import createStyles from '../warehouseStyles'


const ColoredDot = ({ dotColor }) => {
    return (
        <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: dotColor, marginLeft: 3 }}/>
    )
}


const getDots = (product) => {
    let dots = []
    if (product.color && product.color.length > 0) {
        product.color.forEach(color => {
            dots.push(<ColoredDot dotColor={color} key={color + product.id}/>)
        })
    }
    return dots
}




const ColorDots = ({ product }) => {

    const classes = createStyles()

    return (
        <div className={classes.dotsContainer}>
            {getDots(product)}
        </div>
    )
}

export default ColorDots

