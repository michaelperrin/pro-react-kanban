import React, { Component } from 'react';
import List from './List'

class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col-md-4">
            <List id='todo' title="To Do" cards={
                this.props.cards.filter((card) => card.status === "todo")
              } />
          </div>
            
          <div className="col-md-4">
            <List id='in-progress' title="In Progress" cards={
                this.props.cards.filter((card) => card.status === "in-progress")
              } />
          </div>
            
          <div className="col-md-4">
            <List id='done' title='Done' cards={
                this.props.cards.filter((card) => card.status === "done")
              } />
          </div>
        </div>
      </div>
    )
  } 
}

export default KanbanBoard;