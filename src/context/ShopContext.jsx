import React, { createContext, useState, useEffect, useContext } from 'react';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    // const fetchData1 = async () => {
    //   try {
    //     const response = await fetch('https://dummyjson.com/products');
    //     const jsonData = await response.json();
    //     setData1(jsonData);
    //     console.log(data1)
    //   } catch (error) {
    //     console.error('Error fetching data from API 1:', error);
    //   }
    // };


    const fetchData1 =  () => {
        fetch('https://dummyjson.com/products') 
        .then((res) => res.json())
        .then((data) => setData1(data))
        console.log(data1)
    }

    // const fetchData2 = async () => {
    //   try {
    //     const response = await fetch('https://dummyjson.com/products');
    //     const jsonData = await response.json();
    //     setData2(jsonData);
    //     console.log(data2)
    //   } catch (error) {
    //     console.error('Error fetching data from API 2:', error);
    //   }
    // };

    fetchData1();
    // fetchData2();
  }, []);

  return (
    <APIContext.Provider value={{ data1, data2 }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;