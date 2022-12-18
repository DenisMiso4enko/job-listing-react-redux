import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterBar />
        <JobList />
      </div>
    </div>
  );
}

export default App;
