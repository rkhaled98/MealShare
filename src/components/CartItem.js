/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import '../style.scss';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class CartItem extends Component {
  handleRemove(itemId) {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 6000,
    };
    toastr.clear();
    setTimeout(() => toastr.warning('Remove from Cart'));
    firebase.database().ref('cart').child(itemId).remove();
  }

  // handleShare(id, sku) {
  //   const updates = {};
  //   sku = updates[`notes/${noteId}/x`] = newX;
  //   firebase.database().ref().update(updates);
  // }

  render() {
    return (
      <Card className={this.props.classes.root} style={{ flexBasis: '33%', margin: '10px' }}>
        <CardActionArea>
          <CardMedia
            className={this.props.classes.media}
            image="../img/placeholder.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.count ? <p>This item is wished by {this.props.count} people.</p> : <p>This item is not wished by anybody.</p>}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => this.props.handleShare(this.props.id)}>Share</Button>
          <Button onClick={() => this.handleRemove(this.props.id)} size="small" color="primary">Remove from Cart</Button>
        </CardActions>
      </Card>
      // <div className="cart-item" id="parent-cart">
      //   <div id="image-cart">
      //     <img src={require('../img/placeholder.png')} alt="" />
      //   </div>


    );
  }
}
// export default CartItem;
export default withStyles(styles)(CartItem);
