import styled from 'styled-components'

export const LoginStyled = styled.div`

  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  padding: 1px;
  


.conteudo{
  
  font-size: x-large;
  background-color: #f7f9fa;
  color: #516270;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
}


.input-area {
  width: 300px;
  height: 45px;
  box-sizing: border-box;
  border-radius: 3px;
  border : 3px solid #cbd6de;
  padding-inline-start: 1px;
  font-family: poppins;
  font-size: 15px;
  color: 516270;
  outline: none;
  font-family: Arial, sans-serif;
  background-color: #ffffff;

  .input{
    width: 260px;
  height:40px;
  border: none;
  :focus-visible {
    outline:none;

  }}
  .icon{
    width: 30px;
    padding-left: 3px
  }
}



#button{
  color: #b1d2ee;
  background-color: #ffffff;
  width: 250px;
  height: 45px;
  border-radius: 3px;   
  border: 3px ridge #87cefa;
  font-size: large;
  margin: 0 auto;
  display: block;
}

#esquecisenha {
  text-align: center;
  display: block; 
  font-size: medium;
  font-family: Arial, sans-serif;
  padding: 10px;
  color:#b1d2ee;
      
}

#title{
  padding-bottom: 100px;
}

`
