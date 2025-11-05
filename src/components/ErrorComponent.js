import { useRouteError } from "react-router"

const ErrorComponent =()=>{
    const errObj = useRouteError();

    return errObj.status="404"?(<div className="error-component">
        <img src="https://github.com/Anuj27aKamboj/grYp/blob/main/public/error_component_image.jpg?raw=true" title="error icons" />
    </div>): (<div>
        <h1>Oops Something Doesn't Feel Right</h1>
        <h3>We're diagnosing</h3>
    </div>)
}

export default ErrorComponent