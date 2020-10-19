import React from "react";

class Dismissable extends React.Component {
  constructor() {
    super();
    this.state = {
      dismissed: false,
    };
  }

  dismiss = () => {
    this.setState({
      dismissed: true,
    });
  };

  render() {
    const { dismissed } = this.state.dismissed;
    if (!dismissed) {
      return (
        <div className="alert alert-dismissible fade show" role="alert">
          <div>This website looks best when viewed on desktop</div>
          <button
            type="button"
            className="close-custom"
            data-dismiss="alert"
            aria-label="Close"
            onclick={this.dismiss}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Dismissable;
