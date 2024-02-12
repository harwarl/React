export const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
