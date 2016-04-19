import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map((task) => (
      <ListItem
        key={task.id}
        leftCheckbox={<Checkbox defaultChecked={task.done} />}
        primaryText={task.name}
        rightIconButton={<a href="#" className="checklist__task--remove">Remove</a>}
      />
    ));

    return (
      <List>
        <Subheader>Tasks</Subheader>
        {tasks}
      </List>
    );
  }
}

export default CheckList;
