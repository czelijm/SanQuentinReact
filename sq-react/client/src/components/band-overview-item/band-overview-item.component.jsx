import { Card, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, {useContext, useEffect, useState} from 'react'

import {BandContext} from '../../providers/band/band.provider';

import { styles } from './band-overview-item.styles';



// const BandItem = ({bandMember:{title,image,innerImage,descriptionArray}}) => { 
const BandItem = ({bandMember,classes}) => { 
    
    // const {title,image,innerImage,descriptionArray} = bandMember;
    const { image} = bandMember;
    const {setBandMember,setIsClicked,render,setRender} = useContext(BandContext);
    const [modStyleClassCard, setModStyleClassCard] = useState('grey')
    const [changeColor, setChangeColor] = useState(false);
    

    useEffect(() =>{

      if(render){
          setModStyleClassCard(changeColor?'red':'grey')  
          if(changeColor) setChangeColor(false);
          if(render) setRender(false);
      }

    }, [render, changeColor, setRender]);


    return(
        // <BandOverviewItemComponent>
        //     {/* <BandTitle>{title}</BandTitle> */}
        //     {image?<BandImage src={image} onClick={()=>{setBandMember(bandMember);setIsClicked();}}/>:<div></div>}
        //     {/* {descriptionArray.map((d,index)=><p key={index}>{d}</p>)}
        //     {innerImage?<BandInnerImage src={innerImage}/>:<div></div>} */}
        // </BandOverviewItemComponent>
        <Card sx={{"border-color":`${modStyleClassCard}`}} className={classes.card} onClick={()=>{
          setBandMember(bandMember);

          setChangeColor(true);
          setRender(true); 


          setIsClicked();
          }}>
      {/* <CardActionArea> */}
        <CardMedia className={classes.media} image={image} />
        {/* <CardContent className={classes.content}>
        </CardContent> */}
      {/* </CardActionArea> */}
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    )
}

// export default BandItem;
export default withStyles(styles)(BandItem);