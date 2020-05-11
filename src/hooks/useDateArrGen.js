import { useState, useEffect } from "react";
import moment from "moment";

const useDataArrGen = () => {
  const [dateArr, setDateArr] = useState([]);

  useEffect(() => {
    setDateArr([
      moment().subtract(4, "days"),
      moment().subtract(3, "days"),
      moment().subtract(2, "days"),
      moment().subtract(1, "days"),
      moment()
    ]);
  }, []);

  return dateArr;
};

export default useDataArrGen;
