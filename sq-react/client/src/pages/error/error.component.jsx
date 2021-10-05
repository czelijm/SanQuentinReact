import React from 'react';
import ReactPlayer from 'react-player'
import {withStyles} from '@material-ui/styles'
import SomethingWentWrong from '../../assets/404.mp4'


const styles = {
    title: {
        'text-align':'center'
    },
  };

const ErrorComponent = ({classes}) => (
    <div>
        <h2 className={classes.title}>Coś poszło nie tak...</h2>
        <ReactPlayer 
            playing
            url={SomethingWentWrong}
            width='100%'
            height='100%'
            loop
            muted
        />
    </div>
)

export default withStyles(styles)(ErrorComponent);