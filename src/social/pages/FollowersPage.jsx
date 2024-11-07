import React, { useContext, useEffect, useState } from "react";
import { TwittsContext } from "../contexts/TwittsContext";

const FollowersPage = () => {
  const {
    twittState: { users },
    loadUsers,
  } = useContext(TwittsContext);

  useEffect(() => {
    loadUsers(); // Cargar todos los usuarios al montar el componente
  }, [loadUsers]);
  console.log(users);

  return (
    <div className="FollowersPage">
      <h2>Usuarios registrados</h2>
      {users && users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="user-card">
            <p>{user.displayName}</p>
            <button>
              {/* Aquí puedes añadir lógica de seguir/dejar de seguir */}
            </button>
          </div>
        ))
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default FollowersPage;
