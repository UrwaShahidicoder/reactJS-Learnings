import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
     <h1>here is my mini project of react JS</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
