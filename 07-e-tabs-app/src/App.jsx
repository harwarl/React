import { useState, useEffect } from 'react';
import { JobInfo } from './JobInfo';
import './index.css';
import { BtnContainer } from './BtnContainer';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="job-center">
      {/*Button Container */}
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      {/* Job Info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}

export default App;
