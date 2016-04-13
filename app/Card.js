import React, { Component } from 'react';
import CheckList from './CheckList';

// Name it UICard to avoid name conflict with current component
import UICard from 'material-ui/lib/card/card';

import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import marked from 'marked';

class Card extends Component {
  render() {
    function createMarkup(text) {
      // See https://facebook.github.io/react/tips/dangerously-set-inner-html.html
      return {__html: marked(text)};
    }

    return (
      <UICard>
        <CardHeader title={this.props.title} />
        <CardText>
          <span dangerouslySetInnerHTML={createMarkup(this.props.description)} />

          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </CardText>
      </UICard>
    );
  }
}

export default Card;
