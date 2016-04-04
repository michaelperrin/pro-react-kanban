import React, { Component } from 'react';
import CheckList from './CheckList';

// Name it UICard to avoid name conflict with current component
import UICard from 'material-ui/lib/card/card';

import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';

class Card extends Component {
  render() {
    return (
      <UICard>
        <CardHeader title={this.props.title} />
        <CardText>
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </CardText>
      </UICard>
    );
  }
}

export default Card;
