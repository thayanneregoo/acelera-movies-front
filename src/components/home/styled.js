import styled from 'styled-components'

export const HomeStyled = styled.div`
.container{
background-color:lightgrey;
width: 100%;
height: 100vh;
display: flex;
align-items: flex-start;
.sidemenu{
  width: 200px;
  height: 100px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
}
.hello{
  background-color: rgb(136, 157, 161);
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.addmovie{
  display: flex;
  align-items: flex-end;
  height: 50px;
}
.conteudo{
  display:flex ;
  flex-direction: column;
  align-items: center;

}
.title{
  background-color: rgb(141, 139, 139);
  display: flex;
  justify-content: center;
}
.image{
  width: 200px;
}
.yellowicon{
  color: yellow;
  }
.greyicon{
  color: grey;
}
}`
