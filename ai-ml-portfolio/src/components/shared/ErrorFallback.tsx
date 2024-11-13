import React from 'react'

const ErrorFallback: React.FC = () => {
  return (
    <div className="error-fallback">
      <h1>Oops! Something went wrong</h1>
      <p>We're sorry, but an unexpected error occurred.</p>
      <button onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  )
}

export default ErrorFallback