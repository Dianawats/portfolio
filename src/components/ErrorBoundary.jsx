import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("3D Error:", error);
  }

  render() {
    return this.state.hasError ? (
      <div className="bg-red-900/20 p-4 text-red-500">
        3D Component Crashed
      </div>
    ) : this.props.children;
  }
}