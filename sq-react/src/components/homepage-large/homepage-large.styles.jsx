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

