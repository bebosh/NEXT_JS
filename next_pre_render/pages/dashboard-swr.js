import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const {data, error}= useSWR("dashboard", fetcher);

  if(error){return "An error has occurred"}
  if(!data){return "Loading..."}

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Posts - {data.posts}</p>
      <p>Likes - {data.likes}</p>
      <p>Followers - {data.followers}</p>
      <p>Following - {data.following}</p>
    </div>
  );
};

export default DashboardSWR;
