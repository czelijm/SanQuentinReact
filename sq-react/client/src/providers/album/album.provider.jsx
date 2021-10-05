import React,{createContext, useState} from 'react';

export const AlbumContext = createContext({
    album:undefined,
    setAlbum: () =>{}
}); 

const AlbumProvider = ({children}) =>{
    const [album, setAlbumState] = useState(undefined);
    const setAlbum = (a) => setAlbumState(a);

    return (
        <AlbumContext.Provider
            value={{
                album,
                setAlbum
            }}
        >
            {children}
        </AlbumContext.Provider>
    );
}

export default AlbumProvider;
