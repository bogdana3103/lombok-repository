import React from 'react';
import Head from '../components/HeadComponent/head';
import Latest from '../components/latestComponent/latest';
import About from '../components/AboutComponent/about';
import Form from '../components/FormComponent/form';




class mainContainer extends React.Component {
    render() {
      return  <div className="mainWrapper">
        <Head />
        <Latest /> 
        <About /> 
        <Form />  
      </div>
      
    }
}


export default mainContainer 



