import React from "react";
import NavBar from './NavBar';
import '../styles/home.css';
import '../styles/LeftSideBar.css';
import "../styles/App.css";
import '../styles/RightSideBar.css';
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const MyJob = () => {
  const handleDeveloper1 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper2 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper3 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper4 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };
  const handleDeveloper5 = () => {
    window.open(
      "https://in.indeed.com/jobs?q=Front+End+Web+Developer+Internship&vjk=67850a7d78dd5b5e&mna=&=&aceid=&gclid=CjwKCAjw5remBhBiEiwAxL2M98eFj404LUpuq7dU4VpGjTvbJiu140zSfur5jSPkvZZB0VaCcgmfhBoCdUkQAvD_BwE&gclsrc=aw.ds&from=mobRdr&utm_source=%2Fm%2F&utm_medium=redir&utm_campaign=dt/"
    );
  };

  return (
    <>
        <NavBar />
        <div className="mainContainer">
          <LeftSideBar />
        <div className="MiddleBar">
        <div className="navbar___div">
                  <div>
                      <h3 className="deslist">Jobs</h3>
                      <p className="jobs__heading">Recommended for you</p>
                      <p>based on your profile and search history</p>
                    </div>
                    <div className="jobs_container" onClick={handleDeveloper1}>
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/C560BAQFSVDtroiTPVg/company-logo_100_100/0/1662729127883?e=1699488000&v=beta&t=z8Do14LR9jH-m6KnqCEc6XPGhbyjDhQmY51tUtN97lU"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head">
                            Frontend Developer Internship
                          </p>
                          <p className="para_text">Serenade Story</p>
                          <p className="para_detail">
                            Jakarta Metropolitan Area (Remote)
                          </p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">&#128065;</p>
                        <p className="pad_-leftfg">&#xf097;</p>
                      </div>
                    </div>
                    <div className="jobs_container" onClick={handleDeveloper2}>
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D4D0BAQHuVyjNBeQv9Q/company-logo_100_100/0/1684438608581?e=1699488000&v=beta&t=duZGuZih5PTjczPPKrlAgcyuRbbuFWMndJA0DNe8ZDk"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head">
                            Frontend Engineer (4800 USD/Mes)
                          </p>
                          <p className="para_text">Listopro</p>
                          <p className="para_detail">Mexico (Remote)</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">&#128065;</p>
                        <p className="pad_-leftfg">&#xf097;</p>
                      </div>
                    </div>
                    <div className="jobs_container" onClick={handleDeveloper3}>
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D4D0BAQHB79AE71th8A/company-logo_100_100/0/1688472201106?e=1699488000&v=beta&t=stqdit685lSOKT-5G3ON-JBVnPJsPV7FppUZUVf9koQ"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head">
                            Junior Web Front-End Developer
                          </p>
                          <p className="para_text">Turing</p>
                          <p className="para_detail">Mexico (Remote)</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">&#128065;</p>
                        <p className="pad_-leftfg">&#xf097;</p>
                      </div>
                    </div>
                    <div className="jobs_container" onClick={handleDeveloper4}>
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D4E0BAQHT3hcIDOgL_Q/company-logo_100_100/0/1688367359134?e=1699488000&v=beta&t=zuzwPR8_1lfAh8UOvcAnhZE7_5bNmr42biZVjxk3Xbw"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head">Frontend Developer</p>
                          <p className="para_text">Noir</p>
                          <p className="para_detail">
                            Manchester Area, United Kingdom (Hybrid)
                          </p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">&#128065;</p>
                        <p className="pad_-leftfg">&#xf097;</p>
                      </div>
                    </div>
                    <div className="jobs_container" onClick={handleDeveloper5}>
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D4D0BAQHl2YaMYr-thA/company-logo_100_100/0/1688623900493?e=1699488000&v=beta&t=_5b9fbvcwtpQ0fID_83MCLXhTKYYCX9PZ9eANKMewwE"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head">Frontend Developer</p>
                          <p className="para_text">Infosys</p>
                          <p className="para_detail">Mexico (Remote)</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">&#128065;</p>
                        <p className="pad_-leftfg">&#xf097;</p>
                      </div>
        </div>
        </div>
        </div>
        <RightSideBar />
        </div>
        </>
  )
}

export default MyJob;