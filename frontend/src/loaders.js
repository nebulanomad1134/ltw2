import { json } from 'react-router-dom';

export const placeLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:5000/api/places/${id}`);

  if (!response.ok) {
    throw json({ message: 'Failed to load place details' }, { status: response.status });
  }

  const place = await response.json();
  return place;
};
