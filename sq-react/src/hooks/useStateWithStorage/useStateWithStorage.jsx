import React from "react";

export const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = React.useState(
      localStorage.getItem(localStorageKey) || ''
    );
   
    React.useEffect(() => {
      localStorage.setItem(localStorageKey, value);
    }, [value]);
   
    return [value, setValue];
};

// export const useStateWithLocalStorageForJSON = localStorageKey => {
    
//     const [value, setValue] = React.useState(() =>{
//         return JSON.parse(localStorage.getItem(localStorageKey)) || undefined;
//     });
   
//     React.useEffect(() => {
//         localStorage.setItem(localStorageKey, JSON.stringify(value));
//     }, [value]);
   
//     return [value, setValue];
//   };

export const useStateWithLocalStorageForJSON = localStorageKey => {
    return useStateWithStorageForJSON(localStorageKey,localStorage);
  };
  
export const useStateWithSessionStorageForJSON = localStorageKey => {
    return useStateWithStorageForJSON(localStorageKey,sessionStorage);
  };


export const useStateWithStorageForJSON = (localStorageKey,storageType) => {
    
    const [value, setValue] = React.useState(() =>{
        return JSON.parse(storageType.getItem(localStorageKey)) || undefined;
    });
   
    React.useEffect(() => {
        storageType.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);
   
    return [value, setValue];
  };




