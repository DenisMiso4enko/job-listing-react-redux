import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addJobs } from "./redux/actions/jobs-actions";
import data from "./api/data.json";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addJobs(data));
  }, []);
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
