import React,{createContext, useState} from 'react';

export const BandContext = createContext({
    bandMember:undefined,
    isClicked:false,
    setBandMember: () =>{},
    setIsClicked: () =>{},
    setRender: () =>{}
}); 

const BandProvider = ({children}) =>{

    const [bandMember, setBandMemberState] = useState(undefined);
    const [isClicked, setIsClickedState] = useState(false);
    const [render, setRenderState] = useState(false);
    const setBandMember = (member) => setBandMemberState(member);
    const setIsClicked = () => setIsClickedState(true);
    const setRender = () => setRenderState(!render);

    return(
        <BandContext.Provider
            value={{
                bandMember,
                isClicked,
                render,
                setBandMember,
                setIsClicked,
                setRender
            }}
        >
            {children}
        </BandContext.Provider>
    );
} 

export default BandProvider;
