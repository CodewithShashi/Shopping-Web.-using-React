import React, { useState, useEffect } from "react";
import Skeleton  from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componetsMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componetsMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setloading(false);
        console.log(filter);
      }

      return () => {
        componetsMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return(
       <>
       <div className="col-md-3">
        <Skeleton  height={350}/>
       </div>
       <div className="col-md-3">
        <Skeleton  height={350}/>
       </div>
       <div className="col-md-3">
        <Skeleton  height={350}/>
       </div>
       <div className="col-md-3">
        <Skeleton  height={350}/>
       </div>
       </>
    );
  };

   const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList); 
   }
   
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex  justify-content-centre mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
          <button className="btn btn-outline-dark me-2">Jeweler</button>
          <button className="btn btn-outline-dark me-2">
            Women's Clothing
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-centre p-4" key={product.id}>
                  <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p class="card-text lead fw-bold">
                      ${product.price}
                    </p>
                    <a href="#" class="btn btn-outline-dark ">
                     Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className="disply-6 fw-bolder justify-text-centre">
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-centre">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
