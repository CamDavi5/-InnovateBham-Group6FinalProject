import React from 'react'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton, TumblrShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, RedditIcon, TumblrIcon, EmailIcon } from "react-share";

const savedItemCard = ({savedImage,savedTitle, savedHazard, savedLink}) =>{


return (

<>
<div class="card text-center w-50  mx-auto" >
            <div class="card-header">
              Featured
            </div>
            <div>
            <img class="card-img-top" style={{height: "20rem", width:"20rem"}}  src={savedImage} alt="Card image cap"></img>
            </div>
            <div class="card-body">
              <h5 class="card-title">{savedTitle}</h5>
              <p class="card-text">Hazard: {savedHazard}</p>
              <a href={savedLink} class="btn btn-primary">Learn More</a>
              <p>
               <a class="btn btn-primary mt-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
               Share
               </a>
              </p>
               <div class="collapse" id="collapseExample">
              <div class="card card-body">
              <container >
              <segment>
              <FacebookShareButton
              url = {savedLink}
              quote = {"Hello, Please look and be aware of this recall.Thanks"}
              hashtag = "#Recall"
              >
                  <FacebookIcon logoFillColor="White" round={true}></FacebookIcon>
              </FacebookShareButton>

              <TwitterShareButton
              title = {savedTitle}
              url = {savedLink}
              hashtags = "#Recall"
              >
                  <TwitterIcon logoFillColor="White" round={true}></TwitterIcon>
              </TwitterShareButton>

              <WhatsappShareButton
              title = {savedTitle}
              url = {savedLink}
              >
                  <WhatsappIcon logoFillColor="White" round={true}></WhatsappIcon>
              </WhatsappShareButton>

              <RedditShareButton
              title = {savedTitle}
              url = {savedLink}
              >
                  <RedditIcon logoFillColor="White" round={true}></RedditIcon>
              </RedditShareButton>

              <TumblrShareButton
              title = {savedTitle}
              url = {savedLink}
              tag = "Recall"
              >
                  <TumblrIcon logoFillColor="White" round={true}></TumblrIcon>
              </TumblrShareButton>

              <EmailShareButton
              subject = {`Please View this recall : savedTitle`}
              body = {savedLink}
              >
                  <EmailIcon logoFillColor="White" round={true}></EmailIcon>
              </EmailShareButton>
              </segment>
             </container>
              </div>
                </div>
            </div>
            <div class="card-footer text-muted">
              2 days ago
            </div>
          </div>

</>
)
}

export default savedItemCard;