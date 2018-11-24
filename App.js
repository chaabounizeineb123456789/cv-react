import React, { Component } from 'react';
import './App.css';
import Skills from './components/skills';
import Experience from './components/experience';
import zeineb from './zeineb.jpg';
import Progress from './components/progress';



class App extends Component {
  render() {
    return (
      
      <div className="container">
      
        <div className="column1">
        <h1>zeineb chaabouni</h1>
        <h2>secondary student</h2>
        <img src={zeineb} width="500" />
        <h5 id="info1">personal info</h5>
        <Skills name="adress" des1="bardo, tunis"/>
        <Skills name="phone" des1="58889971"/>
        <Skills name="E-mail" des1="zeinoubachaabouni@gmail.com"/>
        <Skills name="date of birth " des1="17/02/2004"/>
       
                          
        <h5 id="skills2">skills</h5>
        
         <para>html<Progress animated color="warning" value={30} id="pro1" /></para>
         <para>css<Progress animated color="warning" value={50} id="pro1" /></para>
         <para>react<Progress animated color="warning" value={60} id="pro1" /></para>
         <para>javascript<Progress animated color="warning" value={40} id="pro1" /></para>
         <para>bootstrap<Progress animated color="warning" value={20} id="pro1" /></para>
        
         
        </div>
       
        <div className="column2">
        <p className="ktiba">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="ismha">
        <h5>Experience            <Experience ismha="Experience"/></h5>
        
        <Experience date="2017-10" blablabla1="zeineb1"blablabla2="chaabouni" blablabla3="hjvdjevcjhvdsbh"/>
        <Experience date="2017-10" blablabla1="zeineb2" blablabla2="fberhjsvg" blablabla3="vcshbxn"/>
        <Experience date="2017-10" blablabla1="zeineb3" blablabla2="fkhvdbcjfdhb" blablabla3="dhvxhxjn "/>
        <h5>Education              <Experience ismha="skills" /></h5>
        <Experience date="2017-10" blablabla1="zeineb4" blablabla2="fhvchgdv" blablabla3="zezhagvdjbh"/>
        <Experience date="2017-10" blablabla1="zeineb5" blablabla2="dkfhbvj" blablabla3="gvhgvhjbjkbhb"/>
        </div>
        </div>
        </div>

  

    );
  }
}

export default App;
