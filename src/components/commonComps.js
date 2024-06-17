import React from 'react';
import $ from 'jquery';

function Heading(props) {
    return (
        <div className={props.className + " " + "heading text-white heading mb-3"}>
            {props.title}
        </div>
    );
}



function HeaderText(props) {
    return (
        <div className={props?.className + " " + "header-text text-white"}>
            {props.title}
        </div>
    );
}


 function HeadingSubheadingDiv(props){ 
     return (
        <div className={props.className   +  " " + "image-text-div d-flex flex-column gap-1 mb-4" }>
        <Heading title={props.heading}/>
        <HeaderText title={props.subHeading} />
        </div>
     )
}

function Input(props) {
    return (
        <>
        <input className='p-4 px-4 p-lg-3 bg-black fs-2 border border-1 rounded-3 text-white' placeholder='Email Address' />
        </>
    );
}


function PartitionDiv(props) {
    return (
        <div className='partition-div'>      
        </div>
    );
}


function BtnSmall(props) {
    return (
       <button className={props.className + " " + "small-buttons btn fw-medium"}>
        {props.title}
       </button>
    );
}


function BtnLang(props) {
    return (
        <div style={{paddingTop:"0.2rem",paddingBottom:"0.2rem"}}  className={props.className + " " + "px-4 rounded-1 border border-1 border-lightgray"}>
            <svg className='align-baseline text-white' xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="LanguagesSmall" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
            <select style={{border:"1px"}} className='bg-transparent border-0 small-buttons fw-medium p-1 text-light'>
                <option className='text-dark'>English</option>
                <option className='text-dark'>हिन्दी</option>
            </select>
        </div>
    );
}

function BtnBig(props) {
    return (
        <>
        <button className={props.className +" "+ "big-button btn btn-primary fs-1 rounded-3 fw-medium py-4 py-lg-2 lh-base px-5  pe-4"}>
        {props.title}
       <span className="material-symbols-outlined fw-light ms-1">
       chevron_right
       </span>
       </button>
       </>
    );
}


function QuestionDiv(props) {
   
  
    return (
        <div className='question w-75 mx-auto p-5 bg-darkgray'>
        <div className='d-flex justify-content-between align-items-center text-left'>
            <HeaderText title={props.title} />
            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" fill="none" width="calc(3rem + 1vw)" height="36" viewBox="0 0 36 36" role="img" data-icon="PlusLarge" aria-hidden="true" ><path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
        </div>
        </div>
    );
}


function AnswerDiv(props) {
    return (
<div className={props.className +  " " +'answer answer-hidden w-75 mx-auto p-5 py-4 bg-darkgray'}>
        <div className='d-flex flex-column justify-content-between gap-5 text-left py-3'>
            <HeaderText title={props.firstTitle} className="text-left answer-heading" />
            <HeaderText title={props.secondTitle} className={!props?.secondTitle?"d-none":""  + " " + "text-left answer-heading" }/>
            <HeaderText title={props.thirdTitle} className={!props?.thirdTitle?"d-none":""  + " " + "text-left answer-heading" } />
        </div>
        </div>
    );
}

function Links(props) {
    return (
        <label className='footer-link text-light text-decoration-underline '>
            {props.title}
        </label>
    );
}

export default Links;

export { Heading,
    HeaderText,
    PartitionDiv,
    BtnSmall,
    BtnLang,    
    HeadingSubheadingDiv, 
    Input,
    BtnBig,
    QuestionDiv,
    Links,
    AnswerDiv
};