import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <h2>Orders</h2>
      <ul>
        {user.orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id}, Total: ${order.total}
          </li>
        ))}
      </ul>
      <h2>Wishlist</h2>
      <ul>
        {user.wishlist.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
