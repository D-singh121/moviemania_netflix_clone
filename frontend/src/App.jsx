import { Body } from "./components";
import { Toaster } from "react-hot-toast";
import MovieDialog from "./components/MovieDialogModal.jsx"



function App() {

  return (
    <div>
      <Body />
      <Toaster />
      <MovieDialog />
    </div>
  )
}

export default App;
