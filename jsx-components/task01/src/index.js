import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Just';
const myName = 'Natalie '
function Profile(name){
if (name !== "Natalie") {
  return <main id="content" role="main" className="base">
  <h1>{myName}'s React Page</h1>
    <p>focus on chocolate</p>
  </main>
} else {
  return <main id="content" role="main" className="base">
  <h1> {name}'s Focus on chocolate </h1>
    <p>Showcasing the best types of chocolate from across the world </p>
  </main>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile(name));

export default Profile
