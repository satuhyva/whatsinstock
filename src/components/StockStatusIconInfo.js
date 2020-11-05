import React from 'react'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Typography from '@material-ui/core/Typography'
import createStyles from '../warehouseStyles'



const StockStatusIconInfo = () => {

    const classes = createStyles()

    return (
        <div className={classes.iconInfoContainer}>
            <div className={classes.infoRow}>
                <HelpOutlineIcon/>
                <Typography>Waiting or data not available</Typography>
            </div>
            <div className={classes.infoRow}>
                <RadioButtonUncheckedIcon className={classes.outOfStock}/>
                <Typography>Not in stock</Typography>
            </div>
            <div className={classes.infoRow}>
                <RadioButtonCheckedIcon className={classes.inStock}/>
                <Typography>In stock</Typography>
            </div>
        </div>

    )
}

export default StockStatusIconInfo




