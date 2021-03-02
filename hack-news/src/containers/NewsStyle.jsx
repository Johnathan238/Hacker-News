import styled from 'styled-components';

export const Item = styled.li `
    border-bottom: 1px solid #70C1B3;
    padding: 14px 24px;
    text-decoration: none;

    &:last-child {
        border-bottom: none;
}`;

export const Title = styled.h3 `
    color: #B2DBBF;
    margin-top: 0;
    margin-bottom: 6px;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.4px;
    text-decoration: none;
`;

export const Host = styled.span `
    color: #70C1B3;
    font-size: 12px;
`;

export const ExternalLink = styled.a `
    color: #247BA0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`;

export const Description = styled.div `
    font-size: 14px;
    color: #247BA0;
`;

export const CommentLink = styled.a `
    color: #FF1654;

    &:visited {
        color: #F3FFBD;
}`;
