import { Paper, styled } from "@material-ui/core";

export const HomePageLargeItemStyled = styled(Paper)(({ theme }) => { return {
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor:'black',
    // color: theme.palette.text.secondary,
    height: '100%',
    "opacity":"0.3",
    // scale:'1.5',
    'flex':"1",
    // display: "flex",
    position: "relative",
    "flex-direction": "row",
    transition: ".7s",
    "&:hover":{
        // "height":"600px",
        "flex": "7",
        "z-index":"1",
        "opacity":"1",
    },
    "@media (max-width: 801px)": {
        height: '100%',
        width:"100vw !important",
        "&:hover":{
            // "height":"100%",
            // "height": '1000px',
            // "flex": "7",
        }
        // 'flex-direction': 'column' 
    
    }
    
}});

export const styles = {
    image:{
        "object-fit": "cover",
        "width":"100%",
        "height": '100%',
        "&:hover":{
            "width":"45vw",
            // "height": '1000px',
            "flex": "7",
            "@media (max-width: 801px)": {
                "width":"100vw",
            }
        }
        
    },
    transform:{
        "&:hover":{
            // transform:'scaleX(1.5)',
            // 'transform-origin':'bottom',
            // "height":"400px",
            // "flex": "7",
            // "z-index":"1",
            // "opacity":"1",
            // "animation-duration": "500ms",
            // "animation-fill-mode": "both",
            
        }
    }
}

