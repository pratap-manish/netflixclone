import React from 'react';
import $ from 'jquery';
import './homePage.css';
import heroImage from '../files/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
import Links, { BtnSmall,BtnLang, HeaderText, Heading, PartitionDiv ,HeadingSubheadingDiv , Input, BtnBig, QuestionDiv, AnswerDiv} from './commonComps';

function HomePage(props) {

  $(function(){
    $(".question").on("click", function(){
      if(this.parentElement.childNodes[1].classList.contains("answer-visible")){
        this.parentElement.childNodes[1].classList.remove("answer-visible")
      }
      else{
        $(".answer").removeClass("answer-visible")
        this.parentElement.childNodes[1].classList.add("answer-visible")
      }
    })
  })

    return (
      <>
        <div className="bg-dark overflow-hidden hero-div position-relative">
          <img
            className="hero-image"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="background image"
            height="100%"
            width="100%"
          />
        </div>
        <div className="over-image-div position-absolute w-100"></div>
        <div className="navbar position-absolute d-flex flex-row w-100 justify-content-evenly p-4 p-md-0 justify-content-md-around">
          <svg
            width={"13.8rem"}
            fill="#e50914"
            viewBox="0 0 111 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="default-ltr-cache-1d568uk ev1dnif2"
          >
            <g>
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
            </g>
          </svg>
          <div className="nav-buttons d-flex gap-4">

            <BtnLang title="English" className="rounded-2 btn-dark px-3" />
            <BtnSmall title="Sign In" className="rounded-2  btn-primary px-4" />
          </div>
        </div>
        <div className="hero-heading-div w-100 text-center position-absolute">
          <HeadingSubheadingDiv
            heading="Unlimited movies, TV shows and more"
            subHeading="Watch anywhere. Cancel anytime."
          />
          <HeaderText
            title="Ready to watch? Enter your email to create or restart your membership."
            className="mt-1 p-5 pb-0 p-sm-3"
          />
          <div className="d-flex flex-column flex-md-row w-100 justify-content-center gap-3 mx-auto mt-4">
            <Input />
            <BtnBig title="Get Started" className="btn-primary" />
          </div>
        </div>
        <PartitionDiv />
        <div className="bg-black pb-5">
          <div className="flex-div d-flex flex-column flex-lg-row bg-black justify-content-between align-items-center mx-auto pt-5 overflow-hidden">
            <HeadingSubheadingDiv
              className=""
              heading="Enjoy on your TV"
              subHeading="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            />
            <div>
              <div className="position-relative z-0 overflow-hidden">
                <img
                width={""}
                  className="image-div"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                />
                <div className="video-div position-absolute overflow-hidden z-n1">
                  <video className="" loop autoPlay muted playsInline>
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PartitionDiv />
        <div className="bg-black pb-5 pt-4">
          <div className="flex-div d-flex flex-column flex-lg-row flex-column-reverse bg-black justify-content-between gap-5 gap-lg-5 align-items-center mx-auto pt-5 pb-5 overflow-hidden">
            <div className="d-flex flex-column align-items-center position-relative me-5 ms-5 p-5 overflow-hidden">
              <img 
              className='image-div'
               width={"calc( 75% + 25vw )"}
               src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
              <div
                style={{ top: "68%",width:"calc( 20% + 10vw + 14rem)" }}
                className="d-flex align-items-center position-absolute bg-black justify-content-lg-center gap-4 justify-content-around border border-lightgray border-2 rounded-5 p-0 py-3 p-md-3 px-0"
              >
                <img
                  width={"17%"}
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
                <div className="text-white fs-4 fw-medium lh-sm me-5">
                  Stranger Things
                  <br></br>
                  <label style={{ color: "blue",fontSize:"calc(12px + 0.3vw)"}} className="fw-normal">
                    Downloading...
                  </label>
                </div>
                <img
                  width={"15%"}
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                />
              </div>
            </div>
            <HeadingSubheadingDiv
              className="mx-5"
              heading="Download your shows to watch offline"
              subHeading="Save your favourites easily and always have something to watch."
            />
          </div>
        </div>
        <PartitionDiv />
        <div className="bg-black pb-5 pt-5">
          <div className="flex-div d-flex flex-column flex-lg-row bg-black justify-content-between gap-5 align-items-center mx-auto pt-5 pb-5 overflow-hidden">
          <HeadingSubheadingDiv
              className=""
              heading="Watch everywhere"
              subHeading="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            />
           <div className='image-div-third position-relative z-0  pt-5 overflow-hidden'>
            <img
            width={"100%"}
            className='image-div'
             src='	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png' />
            <div className='position-absolute z-n1 overflow-hidden video-div-second' 
            style={{ top: "13%",left: "19%",width: "61%" }}>
               <video className='overflow-hidden' autoPlay muted loop playsInline>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
                </video> 
            </div>
            </div> 
          </div>
          </div>
          <PartitionDiv />
          <div className="bg-black pb-5 pt-5">
          <div className="flex-div d-flex flex-column flex-lg-row flex-column-reverse bg-black justify-content-between  align-items-center mx-auto pt-5 pb-5 overflow-hidden">
           <div className='position-relative z-0  pt-5 overflow-hidden w-100 image-div-third'>
            <img
            width={"100%"}
            className='image-div'
            style={{}}
            src='https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d' />
            </div> 
          <HeadingSubheadingDiv
              className=""
              heading="Create profiles for kids"
              subHeading="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
            />
          </div>
          </div>
          <PartitionDiv />
          <div className='bg-black pt-5 d-flex flex-column gap-3'>
          <Heading title="Frequently asked questions" className="text-center pt-5" />
          <div>
          <QuestionDiv title="What is Netflix?" />
          <AnswerDiv className="" firstTitle="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices." 
          secondTitle="You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
          />
          </div>
          <div>
          <QuestionDiv title="How much Netflix cost?" />
          <AnswerDiv className="" firstTitle="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." 
          />
          </div>
          <div>
          <QuestionDiv title="Where can I watch?" />
          <AnswerDiv className="" firstTitle="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." 
          secondTitle="You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          />
          </div>
          <div>
          <QuestionDiv title="How do I cancel?" />
          <AnswerDiv className="" firstTitle="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." 
          />
          </div>
          <div>
          <QuestionDiv title="What can I watch on Netflix?" />
          <AnswerDiv className="" firstTitle="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." 
          />
          </div>
          <div>
          <QuestionDiv title="Is Netflix good for kids?" />
          <AnswerDiv className="" firstTitle="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space." 
          secondTitle="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          />
          </div>
          <HeaderText
            title="Ready to watch? Enter your email to create or restart your membership."
            className="fs-2 mt-5  text-center"
          />
          <div className="d-flex flex-column flex-md-row w-100 justify-content-center gap-3 mx-auto mt-4 mb-5 pb-5">
            <Input />
            <BtnBig title="Get Started" className="btn-primary" />
          </div>
          </div>
          <PartitionDiv />
          <div className='bg-black pt-5 pb-5'>
            <div className=' w-75 mx-auto'>
                <label className='text-light fs-4'>
                    Questions? Call <Links title="012-345-678-900"/>
                </label>
            </div>    
          <div className='footer-div d-flex justify-content-start w-75 mx-auto gap-lg-5 gap-xl-0'>
            <div className='d-lg-flex justify-content-lg-start w-50 ' style={{gap:"12rem"}}>
            <div className='d-flex flex-column gap-4 pb-4'>
                <Links title="FAQ" />
                <Links title="Investor Relations" />
                <Links title="Privacy" />
                <Links title="Speed Test" />
            </div>
            <div className='d-flex flex-column gap-4'>
                <Links title="Help Centre" />
                <Links title="Jobs" />
                <Links title="Cookie Preferences" />
                <Links title="Legal Notices" />

            </div>
            </div>
            <div className='d-lg-flex justify-content-lg-start w-50' style={{gap:"12rem"}}>
            <div className='d-flex flex-column gap-4 pb-4'>
                <Links title="Account" />
                <Links title="Ways to Watch" />
                <Links title="Corporate Information" />
                <Links title="Only on Netflix" />

            </div>
            <div className='d-flex flex-column gap-4'>
                <Links title="Media Centre" />
                <Links title="Terms of Use" />
                <Links title="Contact Us" />
            </div>
            </div>
          </div>
          <div style={{width:"calc(36rem + 10vw)",marginLeft:"12.5%"}} className='mt-4 pb-5'>
          <BtnLang className="my-3 mb-4 mt-5 footer-lang-button"/>
                <label className='text-light fs-3'>
                    Netflix India
                </label>
                <br></br> 
                <label className='text-light fs-3 pt-4'>
                    Clone made by <b>Manish Pratap Singh</b>
                </label>
                <br></br> 
                <a href="https://main--statuesque-melba-8e2373.netlify.app/" class="text-light fs-3 pt-4"> Click here </a>
                <span className="text-light fs-3 fw-bold">for my shopping web app</span><br></br>
                <label className='text-light fs-4 pt-3'>
                This website is a non-commercial, educational project intended solely for the purpose of demonstrating web development skills. It is a clone of the Netflix.com website 
                created for personal learning and portfolio display.<br></br> 
                <span className='text-decoration-underline'> All Netflix trademarks, logos, and images are the property of Netflix, Inc. </span><br></br> This project is not endorsed by or affiliated with Netflix, Inc. in any way. No content from the original Netflix site is stored or distributed. This clone is created under the principles of fair use for educational purposes only.
                </label>
                <br></br> 
                <label className='text-light fs-3 pt-4'>
                <b>All Rights Belong to Netflix</b>
                </label>
            </div>  
          </div>
      </>
    );
}

export default HomePage;