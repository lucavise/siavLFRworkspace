import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-react-dateinputs';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import './App.css';
import products from './products.json';

function App() {
  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <Calendar />
      <Grid
        data={products}>
        <GridColumn field="ProductName" />
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
      </Grid>
    </div>
  );
}

export default App;
