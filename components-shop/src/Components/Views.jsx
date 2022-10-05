


import {Header,Footer}  from './HeaderFooter';
import { Outlet } from "react-router-dom";
import Test from './Test';
import useFetch from '../customize/fetch';




export default function Views() { 

  const { data: dataHeadefAndFooter, isLoading}
  = useFetch(`http://localhost:3004/headerAndFooter`, false);

    return (
      isLoading === false && dataHeadefAndFooter?
      <>
        <Header dataheader={dataHeadefAndFooter.header} />
        <main><Outlet /></main>                                 
        <Footer dataFooter={dataHeadefAndFooter.footer}/>                         
      </>
      :
      isLoading ===true && 
        <div>
        loading
        </div>
      
    );
  }
  

  