/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import firebase from 'firebase';
import Button from '@material-ui/core/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
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

class WishItem extends Component {
  constructor(props) {
    super(props);
    this.addWish = this.addWish.bind(this);
  }

  handleRemove(itemId) {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 6000,
    };
    toastr.clear();
    setTimeout(() => toastr.warning('Remove from Wishlist'));
    firebase.database().ref('needed').child(itemId).remove();
  }

  // eslint-disable-next-line class-methods-use-this
  addWish(sku, name) {
    toastr.options = {
      positionClass: 'toast-top-right',
      hideDuration: 300,
      timeOut: 6000,
    };
    toastr.clear();
    setTimeout(() => toastr.success('Wish Added'));
    const newKey = firebase.database().ref('needed').push().key;
    const neededItem = {
      sku,
      name,
      id: newKey,
    };
    const updates = {};
    updates[`needed/${newKey}`] = neededItem;
    firebase.database().ref().update(updates);
  }

  render() {
    return (
      <Card className={this.props.classes.root} style={{ flexBasis: '33%', margin: '10px' }}>
        <CardActionArea>
          <CardMedia
            className={this.props.classes.media}
            image={`https://source.unsplash.com/1600x900/?${this.props.name}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.name}{this.props.name}{this.props.name}{this.props.name}{this.props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {this.props.inSearch === 1 ? (
            <Button size="small" color="primary" onClick={() => this.addWish(this.props.sku, this.props.name)}>Wish</Button>
          ) : <div />}

          {this.props.stillNeeded === 1
            ? (
              <Button onClick={() => this.handleRemove(this.props.id)} size="small" color="primary">Remove from Wishlist</Button>
            ) : <div />
          }
        </CardActions>
      </Card>
      // <div className="wish-item" id="parent">
      //   <div id="image">
      //     <img src={require('../img/placeholder.png')} alt="" />
      //   </div>

    //   <div id="text">
    //     {this.props.name}
    //   </div>

    //   <div id="buttons">
    //     {this.props.inSearch === 1
    //       ? <Button id="wish" variant="contained" color="primary" onClick={() => this.addWish(this.props.sku, this.props.name)}>Wish</Button>
    //       : <p>------------------------</p>}

    //     {this.props.stillNeeded === 1
    //       ? <Button id="remove" variant="contained" onClick={() => this.handleRemove(this.props.id)}>Remove from Wishlist</Button>
    //       : <p>------------------------</p>}
    //   </div>
    // </div>
    );
  }
}
export default withStyles(styles)(WishItem);
