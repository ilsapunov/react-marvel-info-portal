import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div style={{'textAlign': 'center'}}>
            <ErrorMessage/>
            <p style={{'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
            <Link style={{'display': 'inlineBlock'}} className='button button__main button__long' to="/"><div className="inner">Back to main page</div></Link>
        </div>
    )
}

export default Page404;