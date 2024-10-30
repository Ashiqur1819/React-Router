import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()

    console.log(error)
    return (
      <div>
        <h2>Oopps!!!</h2>
        <p>This page is not available..</p>
        <p>
          {error.statusText || error.message}
          {error.status === 404 && (
            <div>
              <h2>You are in the wrong path..</h2>
              <Link to='/'>Go Home</Link>
            </div>
          )}
        </p>
      </div>
    );
};

export default Error;