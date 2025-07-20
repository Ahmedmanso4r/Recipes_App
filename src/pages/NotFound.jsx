import React from 'react'
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="text-center my-5">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please check the URL or return to the home page.</p>
      <Link to="/" className="btn btn-primary mt-3">Go to Home</Link>
      <p className="mt-3">Or you can visit our <Link to="/settings">Settings</Link> page for more options.</p>
      <p className="mt-3">If you need help, please contact support.</p>
      <p className="mt-3">Thank you for your understanding!</p>
    </div>    
  )
}
