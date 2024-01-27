import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/harwarl';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await resp.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>loading ...</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  return (
    <div>
      <img style={{ width: '150px', borderRadius: '25px' }} src={user.avatar_url} alt={user.name} />
      <h4>{user.name}</h4>
      <h4>works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
