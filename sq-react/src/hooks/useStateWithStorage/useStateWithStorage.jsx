import React from "react";

export const useStateWithLocalStorage = localStorageKey => {
  return useStateWithStorage(localStorageKey,localStorage);
};
export const useStateWithSessionStorage = localStorageKey => {
  return useStateWithStorage(localStorageKey,sessionStorage);
};

export const useStateWithStorage = (localStorageKey,storageType) => {
  const [value, setValue] = React.useState(
    storageType.getItem(localStorageKey)
  );

   
  React.useEffect(() => {
    storageType.setItem(localStorageKey, value);
  }, [value]);
   
    return [value, setValue];
};

// export const useStateWithLocalStorage = localStorageKey => {
//     const [value, setValue] = React.useState(
//       localStorage.getItem(localStorageKey) || ''
//     );
   
//     React.useEffect(() => {
//       localStorage.setItem(localStorageKey, value);
//     }, [value]);
   
//     return [value, setValue];
// };

export const useStateWithLocalStorageForJSON = localStorageKey => {
    return useStateWithStorageForJSON(localStorageKey,localStorage);
  };
  
export const useStateWithSessionStorageForJSON = localStorageKey => {
    return useStateWithStorageForJSON(localStorageKey,sessionStorage);
  };


export const useStateWithStorageForJSON = (localStorageKey,storageType) => {
    
    const [value, setValue] = React.useState(() =>{
        // let v = null;
        try {
          return JSON.parse(storageType.getItem(localStorageKey));
        } catch (error) {
          return value;
        }
        // console.log(v);

        //return JSON.parse(storageType.getItem(localStorageKey)) || undefined;
    });
   
    React.useEffect(() => {
        storageType.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);
   
    return [value, setValue];
  };




