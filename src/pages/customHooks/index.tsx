import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalstorage";
interface User {
  id: number;
  name: string;
}

const Customhooks: React.FC = () => {
  const { data, loading, error } = useFetch<User[]>('https://memorinn-webservice.vercel.app/users');
  const [name, setName] = useLocalStorage<string>('name', '');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!name) setName(data ? data[0].name : '');
  
  return (
    <>
      <h1>{name}</h1>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
  
}
export default Customhooks