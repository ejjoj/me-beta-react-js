import React from "react";

const LeftAside = () => {
  return (
    <div className="column column-left">
      <div className="container">
        <h2 className="text-title text-bold">About me:</h2>
        <p className="text">
          I work as <span className="text-bold">Fullstack developer</span> in GQ
          Group, located in Cracow.
        </p>
        <p className="text">
          I am studying
          <span className="text-bold"> Informatics</span> in Wyższa Szkoła
          Zarządzania i Bankowości also in Cracow.
        </p>
        <p className="text">
          As a <span className="text-bold">specialist</span> I am able to
          provide the best solutions for projects and clients.
        </p>
        <p className="text">
          I have managed to take part in projects built on{" "}
          <span className="text-bold">WordPress</span> or{" "}
          <span className="text-bold">PrestaShop</span>.
        </p>
      </div>
    </div>
  );
};

export default LeftAside;
