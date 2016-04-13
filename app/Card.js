import React, { Component } from 'react';
import CheckList from './CheckList';
import marked from 'marked';

class Card extends Component {
  render() {
    function createMarkup(text) {
      // See https://facebook.github.io/react/tips/dangerously-set-inner-html.html
      return {__html: marked(text)};
    }

    // Test inline style
    // See https://facebook.github.io/react/tips/inline-styles.html
    var cardStyle = {
      // CSS properties are camelCased
      borderLeft: '3px solid ' + this.props.color
    };

    return (
      <div className="card" style={cardStyle}>
        <h2>{this.props.title}</h2>
        <div>
          <span dangerouslySetInnerHTML={createMarkup(this.props.description)} />

          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      </div>
    );
  }
}

export default Card;
