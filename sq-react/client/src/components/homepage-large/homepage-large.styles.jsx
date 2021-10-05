import { styled } from "@material-ui/styles";
import { ReactComponent as Logo } from '../../assets/SQ_RED.svg'

export const boxStyles = (itemCount) => ({ 
    display: 'grid', 
    height: '100%',
    "@media (min-width: 801px)": {
        gridTemplateColumns: `repeat(${itemCount}, 1fr)`, // itemCount times, 1 fraction of space
        // gridTemplateRows:`repeat(1, 1fr)` 
     },
})

export const boxStylesFlex = (itemCount) => ({ 
    display: 'flex', 
    height: '100%',
    
    "@media (max-width: 801px)": {
    //     gridTemplateColumns: `repeat(${itemCount}, 1fr)`, // itemCount times, 1 fraction of space
    //     // gridTemplateRows:`repeat(1, 1fr)` 
        'flex-direction': 'column' 
    },

    '&:hover':{
        '& .officalLogoBox' :{
            display:'none',
            // opacity:'0.1',
        }
    }

})

export const gridMobileStyles = { 
    // display: 'flex', 
    
    "@media (max-width: 801px)": {
        "flex": "1",
        height: '10vh',
        "&:hover":{
            "height":"45vh",
            width:"auto",
            // "height": '1000px',
            "flex": "7",
        }
        // 'flex-direction': 'column' 
        
    }
}
export const logoBox = { 
    // display: 'flex',
    'z-index':'999', 
    position:'absolute',
    bottom:'25%',
    left:'10%',
    'background-color':'black',
    padding:'30px',
    // width:'25%',
    // height:'25%',
    // 'background-color':'red',
    opacity:'0.7',
    "@media (max-width: 801px)": {
    }
        // 'flex-direction': 'column' 
}

export const LogoTitle =  styled(Logo)(({ theme }) => { return {
    // display: 'flex',
    'z-index':'999', 
    width:'550px',
    height:'75%',
    "@media (max-width: 801px)": {
    }
}});
