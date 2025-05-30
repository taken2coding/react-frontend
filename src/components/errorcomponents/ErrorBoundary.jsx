import React, { Component } from 'react';
import BaseErrorPage from './BaseErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <BaseErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
