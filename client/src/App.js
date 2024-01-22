import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid'

function App() {
  return (
    <Grid container direction='column' minHeight='100vh'>
      <Grid item>
HEader
      </Grid>
      <Grid item flexGrow='1'>
Body
      </Grid>
      <Grid item>
    Footer
      </Grid>
    </Grid>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
