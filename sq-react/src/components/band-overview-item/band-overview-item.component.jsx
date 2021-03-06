import { Card, CardContent, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, {useContext, useEffect, useState} from 'react'

import {BandContext} from '../../providers/band/band.provider';

import { BandOverviewItemComponent, BandImage, styles } from './band-overview-item.styles';



// const BandItem = ({bandMember:{title,image,innerImage,descriptionArray}}) => { 
const BandItem = ({bandMember,classes}) => { 
    
    // const {title,image,innerImage,descriptionArray} = bandMember;
    const { image} = bandMember;
    const {setBandMember,setIsClicked,render,setRender} = useContext(BandContext);
    const [modStyleClassCard, setModStyleClassCard] = useState('grey')
    const [isSet, setIsSet] = useState(false);
    

    // console.log('render');
    // console.log(render);

    useEffect(() => {
      if(!isSet) setModStyleClassCard('grey');
      setIsSet(false);
    }, [render])

    return(
        // <BandOverviewItemComponent>
        //     {/* <BandTitle>{title}</BandTitle> */}
        //     {image?<BandImage src={image} onClick={()=>{setBandMember(bandMember);setIsClicked();}}/>:<div></div>}
        //     {/* {descriptionArray.map((d,index)=><p key={index}>{d}</p>)}
        //     {innerImage?<BandInnerImage src={innerImage}/>:<div></div>} */}
        // </BandOverviewItemComponent>
        <Card sx={{"border-color":`${modStyleClassCard}`}} className={classes.card} onClick={()=>{setBandMember(bandMember); setModStyleClassCard('red'); setIsSet(true); setRender(!render); setIsClicked();}}>
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