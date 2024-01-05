import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/apiCall/api-action";

const ApiCalling = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(data, "SACHIN");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Your Tailwind-styled Component</h1>
      <p className="mt-2">This is a Tailwind CSS example.</p>
      {data
        ? data.map((item) => (
            <div className="" key={item.id}>
              <p>{item.name}</p>
            </div>
          ))
        : "No-data"}
    </div>
  );
};

export default ApiCalling;
