import React from "react";

function Bomb({ username }: { username: string }) {
  if (username === "bomb") {
    throw new Error("💥 BOOM 💥");
  }
  return <>Hi ${username}</>;
}

export function ErrorHandler() {
  const [username, setUsername] = React.useState("");
  return (
    <div>
      <p>Error Boundary Test Page</p>
      <label>
        {`Username (don't type "bomb"): `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <div>
        <Bomb username={username} />
      </div>
    </div>
  );
}
