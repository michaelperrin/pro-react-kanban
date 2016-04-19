import React, { Component } from 'react';
import List from './List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {},
});

class KanbanBoard extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <div className="container-fluid">
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
        </div>
      </MuiThemeProvider>
    )
  } 
}

export default KanbanBoard;