import './dasboard.css'

import React, { useEffect, useState } from 'react';

const TotalViewsTab = () => {
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/views')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTotalViews(data.totalViews))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h3>Total Views</h3>
      <div>{totalViews}</div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <TotalViewsTab />
      {/* Other components or tabs can be added here */}
    </div>
  );
};

export default Dashboard;
