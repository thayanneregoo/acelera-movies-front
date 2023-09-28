import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { LoginStyled } from './styled'

export const LoginComponent = ({ name, description }) => {
  return (
    <>
    <LoginStyled>
      <div className = 'conteudo' >
    <form >

        <label className='title'>Login:</label>
        <div className='input-area'><FontAwesomeIcon icon={faUser} className='icon'/>
          <input type="email" name="email" className="input" />
        </div>

        <label className='title'> Password:</label>
        <div className='input-area'>  <FontAwesomeIcon icon={faKey} id='key' className='icon'/>
          <input type="password" name="senha" className="input"/>
        </div>

        <a href="/esqueceusenha.html" id="esquecisenha">Esqueceu sua senha ?</a>

        <input type="submit" name="entrar" id="button"/>

      </form>
    </div>
    </LoginStyled>
    </>
  )
}
