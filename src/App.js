import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"; 
import MyCard from "./components/MyCard";
import { getMatches } from "./api/Api";
import { Container, Grid, Typography } from "@material-ui/core";
function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data.matches);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Typography variant="h3" align="center" style={{marginTop:20}}>Welcome to my Live Score APP</Typography>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <React.Fragment>
              {
                match.type=="Twenty20"?(<MyCard key={match.unique_id} match={match}/>):("")
              }
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;