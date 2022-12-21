import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Posts - {dashboardData.posts}</p>
      <p>Likes - {dashboardData.likes}</p>
      <p>Followers - {dashboardData.followers}</p>
      <p>Following - {dashboardData.following}</p>
    </div>
  );
};

export default Dashboard;
