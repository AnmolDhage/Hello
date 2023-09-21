import { Link, useRouteError } from "react-router-dom";
import './errorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, this page is not available.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p><Link to='/'>Go back</Link></p>
    </div>
  );
}