import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import Typography from '@material-ui/core/Typography'



const ProductPageToggler = ({ selectedProductGroup, setSelectedProductGroup }) => {

    const handleSelectionChanged = (event, newSelection) => {
        setSelectedProductGroup(newSelection)
    }
    const productGroups = ['jackets', 'shirts', 'accessories']


    return (
        <div>
            <ToggleButtonGroup
                value={selectedProductGroup}
                exclusive
                onChange={handleSelectionChanged}
            >
                {productGroups.map(productGroup => {
                    return (
                        <ToggleButton value={productGroup} key={productGroup}>
                            <Typography>
                                {productGroup}
                            </Typography>
                        </ToggleButton>
                    )
                })}
            </ToggleButtonGroup>
        </div>

    )
}

export default ProductPageToggler

