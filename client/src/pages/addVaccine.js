import React from 'react';

class AddVacine extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      doseType: 'unique'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    const { name, value } = event.target;
    let state = {};
    switch (name) {
      case 'title':
        state = { title: value };
        break;
      case 'description':
        state = { description: value }
        break;
      case 'doseType':
        state = { doseType: value }
        break;
    }
    this.setState(state);
  }

  renderForm() {

    return (
      <form onSubmit={this.onHandleSubmit}>
          <label>Title:
        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </label>
          <label>Description:
        <input type="text" name="description" onChange={this.onChange} value={this.state.description} />
          </label>
          <label>Autor:
        <input type="text" name="author" onChange={this.onChangeAuthor} value={this.state.description} />
          </label>
          <label>
            <select name="doseType" onChange={this.onChange}>
            </select>
          </label>
          <input type="submit" value="Save"/>
      </form>
      );
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  render() {
    return this.renderForm();
  }
}

export default AddVacine;