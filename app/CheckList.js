import React, { Component } from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/Subheader';
import FontIcon from 'material-ui/lib/font-icon';

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map((task) => (
      <ListItem
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
