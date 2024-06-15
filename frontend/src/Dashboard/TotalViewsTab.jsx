// TotalViewsTab.jsx
import React, { useEffect, useState } from 'react';

const TotalViewsTab = () => {
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/views')
      .then(response => response.json())
      .then(data => setTotalViews(data.totalViews));
  }, []);

  return (
    <div>
      <h3>Total Views</h3>
      <div>{totalViews}</div>
    </div>
  );
};

export default TotalViewsTab;
