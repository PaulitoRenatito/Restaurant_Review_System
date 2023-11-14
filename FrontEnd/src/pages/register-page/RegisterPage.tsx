import HeaderAndFooter from '../../components/header-footer/HeaderFooter'
import { Register } from '../../components/register/Register'
import './register-page.css'

function RegisterPage() {
  
    return (
      <div className='container'>
        <HeaderAndFooter>
          <div className='main-body'>
            <Register/>
          </div>
        </HeaderAndFooter>
      </div>
    )
  }
  
  export default RegisterPage