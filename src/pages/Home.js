import React from 'react'
import Card from "../components/Card";
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Grid
        container
        spacing={4}
        justify="center"
      >
        <Grid item xs={12}>
        <header className='header'>
        <h1> Welcome to HydroFrame</h1>
        <p>Here you can build and run your own model, 
            explore data from CONUS simulations, and try the sandtank app.</p>
        </header>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
            <Link to="/domain">
            <Card title={"Model Builder"} />
            </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Card title={"Data Explorer"} />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Card title={"Open SandTask App"} />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Card title={"Anything Else"} />
        </Grid>
      </Grid>
    )
}

export default Home
