import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
    brandName: "Google",
    postedDate: "2 days ago",
    post: "Frontend Developer Intern",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    brandName: "Amazon",
    postedDate: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhYh_f7b21rrVEczzxZR6alE6CVCgTaGmgQ&s",
    brandName: "Meta",
    postedDate: "5 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 55,
    location: "London, UK"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    brandName: "Microsoft",
    postedDate: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTAqOYhdFiuJlNkLo16vC-9xCc2py91PSxg&s",
    brandName: "Netflix",
    postedDate: "2 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    brandName: "Apple",
    postedDate: "4 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 85,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/tesla-logo-png-transparent-background-11661594429mycuxlun4t.png",
    brandName: "Tesla",
    postedDate: "6 days ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 95,
    location: "Austin, USA"
  },
  {
  brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/3840px-Spotify_logo_without_text.svg.png",
  brandName: "Spotify",
  postedDate: "2 days ago",
  post: "Frontend React Developer",
  tag1: "Full Time",
  tag2: "Mid Level",
  pay: 65,
  location: "Stockholm, Sweden"
},
{
  brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
  brandName: "Adobe",
  postedDate: "5 days ago",
  post: "UI Designer",
  tag1: "Full Time",
  tag2: "Junior Level",
  pay: 60,
  location: "San Jose, USA"
},
{
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt02Pvocmj2bC5dPEWVClHVw843KI_a6yNw&s",
  brandName: "Oracle",
  postedDate: "1 week ago",
  post: "Java Backend Developer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: 85,
  location: "Austin, USA"
}
];  
  console.log("JOBS ADVERTISMENT", jobOpenings);
  return (
    <>
      <h1 id="heading">Find Your Dream Job</h1>
    <div className= "parent"> 
      {jobOpenings.map (function(elem,idx) {
        return  (
          
          <div key = {idx}> 
            <Card logo = {elem.brandLogo} company = {elem.brandName} postDate = {elem.postedDate} 
            post = {elem.post} tag1={elem.tag1} tag2= {elem.tag2} pay = {elem.pay}  loc ={elem.location}/>
          </div>
        );
      })
      }
    </div>
    </>
  );
}

export default App