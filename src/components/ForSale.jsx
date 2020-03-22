import React, { useState } from 'react';

export default function ForSale() {
  const [apartments, setApartments] = useState([]);

  // useEffect(() => {
  //   // TODO: Load JSON of apartments for sale.
  // }, []);

  return (
    <article style={{ gridArea: 'forSale' }}>
      <h1>Apartamentos Listados</h1>
      {!!apartments.length ? (
        apartments.map(Apartment)
      ) : (
        <p>No hay apartamentos a la venta en estos momentos.</p>
      )}
    </article>
  );
}

function Apartment({ number, price, link }) {
  return (
    <article>
      <h1>Aapartamento #{number}</h1>
      <h2>Precio de Venta</h2>
      <p>{price}</p>
      <a href={link}>Anuncio</a>
    </article>
  );
}
