import React from 'react';

export default function Menu() {
  const urls = ['Orders'];
  return (
    <nav>
      <ul>
        {urls.map((url) => <li>{url}</li>)}
      </ul>
    </nav>
  );
}
