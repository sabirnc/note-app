import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from "react-router-dom"
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import RootLayout from "./layouts/RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> } >
       <Route index element={ <Notes /> }/>
       <Route path="create" element={ <Create /> } />
    </Route>
  )
)


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
