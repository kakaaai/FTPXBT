import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00cda0] via-[#00b3ff] to-[#fe00f8] text-transparent bg-clip-text">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-400 mb-8">
              Don't worry, HUGO is on the case! In the meantime, you can try refreshing the page or going back home.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-[#00cda0] via-[#00b3ff] to-[#fe00f8] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Refresh Page
              </button>
              <Link
                href="/"
                className="inline-block bg-white bg-opacity-10 text-white px-6 py-2 rounded-full hover:bg-opacity-20 transition-opacity"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}