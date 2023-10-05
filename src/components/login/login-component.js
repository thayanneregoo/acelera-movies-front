import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { LoginStyled } from './styled'
import { useState } from 'react'
import { loginUser } from '../../client'
import { useNavigate } from 'react-router-dom'

export const LoginComponent = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const clique = async (event) => {
    event.preventDefault()
    const login = { email: email, password: password }
    try {
      const response = await loginUser(login)
      console.log(response)
      if (response.status === 200) {
        navigate('/home')
      } else {
        console.error('verifique')
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }
  return (
    <>
    <LoginStyled>
      <div className = 'conteudo' >
    <form >

        <label className='title'>Login:</label>
        <div className='input-area'><FontAwesomeIcon icon={faUser} className='icon'/>
          <input
          type="email"
          name="email"
          className="input"
          value={email}
          onChange={e => setEmail(e.target.value)}/>
        </div>

        <label className='title'> Password:</label>
        <div className='input-area'>  <FontAwesomeIcon icon={faKey} id='key' className='icon'/>
          <input type="password"
           name="senha"
           className="input"
           value={password}
           onChange={e => setPassword(e.target.value)}/>
        </div>

        <a href="/esqueceusenha.html" id="esquecisenha">Esqueceu sua senha ?</a>

        <button id='button' onClick={clique} >Entrar</button>

      </form>
    </div>
    </LoginStyled>
    </>
  )
}
