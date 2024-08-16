import React, { useEffect, useState } from "react";
import Githubuser from "./Githubuser";
import Loading from "./Loading";

const UseEffectAPI = () => {
  const [user, setUser] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {

    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) =>{
        setLoading(false);
        setUser(data);
      } );
  }, []);
  

  return (
    <>
    {(loading)?<Loading/>:<Githubuser user={user}/>}
    
    </>
  );
};
export default UseEffectAPI;
