import React from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
  private el?: HTMLDivElement = undefined;

  public constructor(props: {}) {
    super(props);

    if (typeof document !== 'undefined') {
      this.el = document.createElement('div');
    }
  }

  public componentDidMount() {
    if (this.el && typeof document !== 'undefined') {
      document.body.appendChild(this.el);
    }
  }

  public componentWillUnmount() {
    if (this.el && typeof document !== 'undefined') {
      document.body.removeChild(this.el);
    }
  }

  public render() {
    const { children } = this.props;

    if (this.el) {
      return ReactDOM.createPortal(children, this.el);
    }

    return null;
  }
}
