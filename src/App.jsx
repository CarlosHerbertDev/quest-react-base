import './App.css'
import Paragrafo from './components/paragrafo/paragrafo'
import Button from './components/button/button'

const showLabelButton = (label) => {
  alert(`A label desse botão é ${label}`);
}


function App() {
  return (
    <>
      <Paragrafo color='blue' textType='uppercase' textColor='white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias aliquid soluta, excepturi libero temporibus quaerat esse voluptate, neque voluptatibus voluptas nulla eius saepe vel porro iusto nostrum corporis dolore?
      </Paragrafo>
      <Button label="Baixar CV" showLabelButton={showLabelButton}/>  
    </>
  )
}

export default App
