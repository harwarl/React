import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        toggle Alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className=" 'alert alert-danger">Hello World</div>;
};

export default ToggleChallenge;
