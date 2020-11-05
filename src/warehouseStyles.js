import { makeStyles } from '@material-ui/core/styles'

const createStyles = makeStyles({
    app: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
    },
    iconInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left',
        marginTop: 10,
        padding: 3,
    },
    infoRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    inStock: {
        color: 'green',
    },
    outOfStock: {
        color: 'red',
    },
    productRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#e7e7e4',
        borderRadius: 6,
        marginBottom: 3,
        padding: 3,
    },
    productDetailsBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'left',
        marginLeft: 3,
    },
    productDetailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dotsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },

})

export default createStyles


