import { useParams } from 'react-router';

const RequestDetailsPage = () => {
  const { id } = useParams();
  return <div className="p-4">🔍 Request details for ID: {id}</div>;
};

export default RequestDetailsPage;
