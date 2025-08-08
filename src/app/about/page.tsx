import React from "react";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) return <div>error</div>;

  const data = await res.json();
 
  return (
    <div>
      {data.map((v) => (
        <div key={v.id}>{v.title}</div>
      ))}
    </div>
  );
};

export default page;
