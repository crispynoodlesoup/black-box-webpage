import './App.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LiveFeed from './Components/LiveFeed.tsx'


function App() {
  return (
    <div className="App" style={{ padding: '50px', height: '100%', overflow: 'hidden'}}>
      <h1 style={{paddingBottom: '10px', fontSize: '40px', color: '#add8e6'}}>BlackBox</h1>
      <Grid container spacing={2}>
        {/* Top Half */}
        <Grid item xs={4}>
          <Card style={{ height: '30vh', margin: '20px', backgroundColor: '#add8e6'}}>
            <CardContent>
              <h1>X</h1>
              <h2>Number of stop signs or stop lights ran</h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ height: '30vh', margin: '20px', backgroundColor: '#add8e6'}}>
            <CardContent>
              <h1>X</h1>
              <h2>Number of harsh breaking or acceleration</h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ height: '30vh', margin: '20px', backgroundColor: '#add8e6'}}>
            <CardContent>
              {/* Your content for the third square card */}
            </CardContent>
          </Card>
        </Grid>

        {/* Bottom Half */}
        <Grid item xs={8}>
          <Card style={{ height: '40vh', margin: '20px', backgroundColor: '#add8e6'}}>
            <CardContent>
              {/* Your content for the wide card */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ height: '40vh', margin: '20px', backgroundColor: '#add8e6'}}>
            <CardContent>
              <LiveFeed/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
