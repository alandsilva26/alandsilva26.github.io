import React from "react";
import final from "../../../images/sfit-app/final.png";

export default function ProjectSfit() {
  return (
    <div className="project__sfit-app">
      <div className="container-fluid">
        <div className="row shadow ">
          <div className="col col-12 col-sm-12 col-md-6 col__left">
            <p className="project__subtitle">
              <a href="https://github.com/alandsilva26?tab=projects">
                Flutter Project: March 2020 - July 2020
              </a>
            </p>
            <h2 className="project__title">SFIT Android App</h2>
            <hr />
            <div className="project__description">
              <b>App features</b>
              <ul>
                <li>Track attendance</li>
                <li>View news and get notified</li>
                <li>View exam results</li>
                <li>View and manage issued books from library</li>
                <li>View and answer polls directly through app</li>
                <li>Allows sign in for Parents, Teachers and Students.</li>
              </ul>
            </div>
            <PlayStoreButton />
          </div>
          <div className="col col-12 col-sm-12 col-md-6 col__right">
            <img className="project__image img-fluid" src={final} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayStoreButton() {
  return (
    <a
      className="playstore__button"
      href="https://play.google.com/store/apps/details?id=org.sfit.sfitapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    >
      <img
        className="img-fluid"
        alt="Get it on Google Play"
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      />
    </a>
  );
}
