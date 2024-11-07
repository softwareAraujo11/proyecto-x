import React, { useContext, useEffect, useState } from "react";
import { TwittsContext } from "../contexts/TwittsContext";

const FollowersPage = () => {
  const {
    twittState: { users },
    loadUsers,
  } = useContext(TwittsContext);

  useEffect(() => {
    console.log("Cargando usuarios...");

    loadUsers(); // Esto debería cargar los usuarios al montar el componente
  }, [loadUsers]); // Asegúrate de que loadUsers está siendo pasado correctamente
  console.log("Usuarios desde el estado:", users); // Verifica que 'users' está llegando correctamente

  return (
    <div className="Followersage">
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
