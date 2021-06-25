import React,{createContext, useState, useEffect} from 'react';

export const BandContext = createContext({
    bandMember:undefined,
    setBandMember: () =>{}
}); 

const BandProvider = ({children}) =>{

    const [bandMember, setBandMemberState] = useState(undefined);
    const setBandMember = (member) => setBandMemberState(member);

    return(
        <BandContext.Provider
            value={{
                bandMember,
                setBandMember
            }}
        >
            {children}
        </BandContext.Provider>
    );
} 

export default BandProvider;
