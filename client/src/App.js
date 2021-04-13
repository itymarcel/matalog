import styled from "styled-components"
import Header from "./components/Header"
import Menu from "./components/Menu"
import DetailPage from "./pages/DetailPage"

function App() {
  return (
    <StyledApp>
     <Header />
     <Menu/>
     <DetailPage/>
    </StyledApp>
  )
}

export default App

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 4.625rem auto;
  grid-template-columns: auto 15rem;

`