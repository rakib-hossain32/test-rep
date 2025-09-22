import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries";

const fetchCountries = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  // const promiseCountries = fetchCountries()
  return <>
  <Suspense fallback={<h1>Loading....</h1>}>
    <Countries fetchCountries={fetchCountries}><div>adsfd</div></Countries>
  </Suspense>
  </>;
}

export default App;
