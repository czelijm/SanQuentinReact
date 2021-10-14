import React from "react";

import {withStyles} from '@material-ui/styles'

import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    margin: "0 20px",
    "background-color":"#121317",
    "color":"#f2fdff",
    // 'border-color':'#da1b2b',
    // 'border-style':'none solid solid',

  },
  media: {
    height: 320
  },
  content:{
    "background-color":"#121317",
    "color":"#f2fdff",
    // 'border-color':'#da1b2b',
    // 'border-style':'none solid solid',
    'border-width':'2px'
  },
  title:{
    // 'color':'#da1b2b',
    "font-weight": "bold"
  }
  
};

function FriendCard(props) {
  const { classes, image, headline, description } = props;

  return (
    // <a onClick={(e) => {
    //     if(isMoving) {
    //       e.preventDefault();
    //     }
    //   }} href='https://w3js.com' target="_blank">
    <Card className={classes.card}>
      {/* <CardActionArea> */}
        <CardMedia className={classes.media} image={image} title={headline} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {headline}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
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
//   </a>
  );
}
export default withStyles(styles)(FriendCard);