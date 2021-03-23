import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Typography, Card, CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '40%',
  },
});

const BlogCard = ({ post }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={'./contemplative-reptile.jpg'}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            EDIT
          </Button>
          <Button size="small" color="primary">
            DELETE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BlogCard;
