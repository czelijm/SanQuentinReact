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
        "height":"400px",
        "flex": "7",
        "z-index":"1",
        "opacity":"1",
    }
}});

export const styles = {
    image:{
        "object-fit": "none",
        "width":"100%",
        "height": '850px',
        "&:hover":{
            "width":"600px",
            // "height": '1000px',
            "flex": "7",
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

