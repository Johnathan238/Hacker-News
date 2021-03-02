import React from 'react';
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './NewsStyle';
const unFOLLOW = "noopener noreferrer nofollow"

const News = () => {

    return (
        <Item>
            <ExternalLink>
                <Title>
                    IDk <Host>IDK</Host>
                </Title>
            </ExternalLink>

            <Description>
                Sup 
                
                <CommentLink href="#" rel={unFOLLOW} target="_blank">
                    test by 
                    {'  '}
                </CommentLink>

                <CommentLink>
                    50 min ago
                    {' | '}
                </CommentLink>

                <CommentLink href="#" rel={unFOLLOW} target="_blank">
                    1 comment
                </CommentLink>

            </Description>
        </Item>
    );
}

export default News