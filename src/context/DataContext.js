import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [daerahData, setDaerahData] = useState([]); // New state for daerah data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/data');
        setAllData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDaerahData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/daerah');
        setDaerahData(response.data);
      } catch (error) {
        console.error('Error fetching daerah data:', error);
      }
    };

    fetchDaerahData();
  }, []);

  return (
    <DataContext.Provider value={{ allData, daerahData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
