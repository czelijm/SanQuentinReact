import React,{createContext, useState, useEffect} from 'react';

export const BandContext = createContext({
    bandMember:undefined,
    isClicked:false,
    setBandMember: () =>{},
    setIsClicked: () =>{}
}); 

const BandProvider = ({children}) =>{

    const [bandMember, setBandMemberState] = useState(undefined);
    const [isClicked, setIsClickedState] = useState(false);
    const setBandMember = (member) => setBandMemberState(member);
    const setIsClicked = () => setIsClickedState(true);

    return(
        <BandContext.Provider
            value={{
                bandMember,
                isClicked,
                setBandMember,
                setIsClicked
            }}
        >
            {children}
        </BandContext.Provider>
    );
} 

export default BandProvider;
