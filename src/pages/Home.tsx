import { useRequests } from "../features/requests/hooks/useRequests";

const HomePage = () => {
  const { data: requests, isLoading } = useRequests();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Request List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {requests?.map((req) => (
            <li key={req.id} className="border p-2 rounded">
              {req.name} — {req.type} — {req.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
