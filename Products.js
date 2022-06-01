import React from "react";
import { useEffect, useState } from "react";

export default function Products() {
  const [user, setUser] = useState([]);
  

  const apidata = async () => {
    const re = await fetch("https://fakestoreapi.com/products");
    const data = await re.json();
    console.log(data);
    setUser(data);
    
  };
  useEffect(() => {
    apidata();
  }, []);


  return (
    <>
      <div className="text-center mx-2">
        <h1 className="display-6 text-center my-4" >Latest products</h1>
        <hr />
        <button type="button" className="btn btn-outline-dark mx-2"
        >
          All
        </button>
        <button type="button" className="btn btn-outline-dark mx-2"
        >
          Men`s wear
        </button>
        <button type="button" className="btn btn-outline-dark mx-2">
          Women's wear
        </button>
        <button type="button" className="btn btn-outline-dark mx-2">
          Electronics device
        </button>
      </div>
      {user.map((e) => {
        return (
          <>
          <div className="row my-2">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <img src={e.image} alt="" height={250} />
      <h5 className="card-title">{e.title}</h5>
        <p className="card-text">${e.price}</p>
        <a href={e.link} className="btn btn-primary">Buy now</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 my-2">
    <div className="card">
      <div className="card-body">
      <img src={e.image} alt="" height={250} />
        <h5 className="card-title">{e.title}</h5>
        <p className="card-text">${e.price}</p>
        <a href={e.link} className="btn btn-primary">Buy now</a>
      </div>
    </div>
  </div>
</div>
          </>
        );
      })}
    </>
  );
}
