import { useQuery } from '@apollo/client';
import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useStateWithSessionStorageForJSON } from '../../hooks/useStateWithStorage/useStateWithStorage';
import { getItemsFromRespone } from '../../queries/social-media/social-media.process-data';
import { GET_SOCIAL_MEDIA } from '../../queries/social-media/social-media.querry';
import { MoreSocialMediaComponentObjectArray } from '../more-socialmedia/more-socialmedia.component';
import { SpinnerAdjustable } from '../spinner/spinner.component';
import { Anchor, PlatformIcon} from './social-media-bar.styles';

// const RenderFunction = ({ children }) => children();

// const InnerSocialMediaBarSubComponent = ({ shouldRenderHook }) =>{
    
//     let socials =[];
//     console.log(`shouldRenderHook  ${shouldRenderHook} ;`);
//     return(
//     shouldRenderHook? (
//         <RenderFunction>
//             {function _ () {
//                 {/* console.log(`socials inside ${socials}`); */}
//                 const [value,setValue] = useStateWithSessionStorage('socials');
//                 const { loading, error, data } = useQuery(GET_SOCIAL_MEDIA);
//                 if (loading) return <SpinnerAdjustable width={70} height={70}/> 
//                 if (error) {console.log(error); return( <p>Error :(</p>)};
//                 socials = getItemsFromRespone(data);
//                 setValue(socials);
//                 return (
//                     <div>
//                         {socials.slice(0,3).map( (s,index)=>(<Anchor key={index} href={s.url} onClick={() => { 
//                                                                 window.location.href = s.url; 
//                                                                 return null;}} 
//                                                             >
//                                                                 <PlatformIcon src={s.image} alt="" />
//                                                             </Anchor>))}
//                         <MoreSocialMediaComponentObjectArray array={socials.slice(3)}/>
//                     </div>
//                 );
//             }}
//         </RenderFunction>

//     ) : (
//         // {console.log(`2nd case inside ${socials}`)}
//         <div>XD</div>
//     // <div>Rendering the hook shortly…</div>
//     ));
    
// }

const SocialMediaBar = () => {

    let socials = [];
    const [value,setValue] = useStateWithSessionStorageForJSON('socials');
    const { loading, error, data } = useQuery(GET_SOCIAL_MEDIA,{
        fetchPolicy: "network-only",   // Used for first execution
        nextFetchPolicy: "cache-first", // Used for subsequent executions
        skip: value //if true skip querry executing
      });
    // const [getSocials, {loading, data}] = useLazyQuery(GET_SOCIAL_MEDIA);
    if(!value) {
        if (loading) return <SpinnerAdjustable width={70} height={70}/> 
        if (error) {console.log(error); return( <p>Error :(</p>)};
        
        socials = getItemsFromRespone(data);
        setValue(socials)
        
    } else {
        socials = value;
    }
    console.log(value);
    console.log(socials);

    return(
        <div>
            {socials.slice(0,3).map( (s,index)=>(<Anchor key={index} href={s.url} onClick={() => { 
                                                    window.location.href = s.url; 
                                                    return null;}} 
                                                >
                                                    <PlatformIcon src={s.image} alt="" />
                                                </Anchor>))}
            <MoreSocialMediaComponentObjectArray array={socials.slice(3)}/>
            {/* //add more socialmedia extended version */}
        </div>
    )
}
// const SocialMediaBar = () => {

//     const [value,setValue] = useStateWithSessionStorage('socials');
//     console.log(`value is ${!value}`);
//     return(
//        <InnerSocialMediaBarSubComponent shouldRenderHook={true} />
//     )
// }
// const SocialMediaBar = () => {

//     const [value,setValue] = useStateWithSessionStorage('socials');
//     const { loading, error, data } = useQuery(GET_SOCIAL_MEDIA);
    
//     if (loading) return <SpinnerAdjustable width={70} height={70}/> 
//     if (error) {console.log(error); return( <p>Error :(</p>)};
    
//     const socials = getItemsFromRespone(data);
//     // console.log(getItemsFromRespone(data));



//     return(
//         <div>
//             {socials.slice(0,3).map( (s,index)=>(<Anchor key={index} href={s.url} onClick={() => { 
//                                                     window.location.href = s.url; 
//                                                     return null;}} 
//                                                 >
//                                                     <PlatformIcon src={s.image} alt="" />
//                                                 </Anchor>))}
//             <MoreSocialMediaComponentObjectArray array={socials.slice(3)}/>
//             {/* //add more socialmedia extended version */}
//         </div>
//     )
// }

export default SocialMediaBar;