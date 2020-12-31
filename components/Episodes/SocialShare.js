import React from 'react';
import styled from 'styled-components';

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,EmailIcon,
    PinterestIcon,
    PinterestShareButton
  } from "react-share";




const SocialShare = ({title,number})=>{

    const shareUrl = `https://africageoconvo.com/shows/${number}`;


    return(
   
            <div>
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        hashtag='#gischat #podcast #conversation #geospatial'
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <LinkedinShareButton
                        url={shareUrl}
                        title={title}
                        source='https://africageoconvo.com'
                    >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>

                    <RedditShareButton
                        url={shareUrl}
                        title={title}
                    >
                        <RedditIcon size={32} round />
                    </RedditShareButton>

                    <TelegramShareButton
                        url={shareUrl}
                        title={title}
                    >
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>

                    <TwitterShareButton

                        url={shareUrl}
                        title={title}
                        via = 'africageoconvo'
                        hashtags = {['gischat','geospatial','podcast']}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        body='Listen to the episode from the African Geospatial Conversation podcast!'
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>

                    <PinterestShareButton
                        url={shareUrl}
                        media={`https://africageoconvo.com/static/assets/episode${number}.png`}
                        description={title}
                    >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
            </div>
    )
}


export default SocialShare;