import logo from './imagenes/logo.png';
import '../src/App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
         <img
         src={logo}
         className='freecodecamp-logo'
         alt='imagen logo ' />
      </div>
       <div className='tareas-listas-principal'>
         <h1>Mis Tareas</h1>
          <ListaDeTareas />

       </div>
    </div>
  );
}

export default App;
