/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React from 'react';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const styles = theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
  }

  addCart(sku, name) {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 6000,
    };
    toastr.clear();
    setTimeout(() => toastr.success('Added to Cart'));
    const newKey = firebase.database().ref('cart').push().key;
    const newCartItem = {
      sku,
      name,
      id: newKey,
    };
    const updates = {};
    updates[`cart/${newKey}`] = newCartItem;
    firebase.database().ref().update(updates);
  }

  render() {
    return (
      <Card className={this.props.classes.root} style={{ flexBasis: '33%', margin: '10px' }}>
        <CardActionArea>
          <CardMedia
            className={this.props.classes.media}
            image={`https://source.unsplash.com/1600x900/?${this.props.term}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button onClick={() => this.addCart(this.props.sku, this.props.name)} size="small" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      // <div id="parent">
      //   <div id="image">
      //     <img src={require('../img/placeholder.png')} alt="" />
      //   </div>
      //   <div id="text">
      //     {this.props.name}
      //     <p>------------------------</p>
      //   </div>
      //   <div id="buttons">
      //     <Button className="items" variant="contained" color="primary" onClick={() => this.addCart(this.props.sku, this.props.name)}>
      //       Add to Cart
      //     </Button>
      //   </div>
      // </div>
    );
  }
}

export default withStyles(styles)(SearchItem);
