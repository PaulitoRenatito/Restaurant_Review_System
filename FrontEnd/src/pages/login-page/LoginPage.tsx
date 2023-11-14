
import HeaderAndFooter from '../../components/header-footer/HeaderFooter'
import { Login } from '../../components/login/Login'
import './login-page.css'

function LoginPage() {
  
    return (
      <div className='container'>
        <HeaderAndFooter>
          <div className='main-body'>
            <Login/>
          </div>
        </HeaderAndFooter>
      </div>
    )
  }
  
  export default LoginPage