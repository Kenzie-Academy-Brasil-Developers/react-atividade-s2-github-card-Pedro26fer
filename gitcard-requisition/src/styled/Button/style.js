import styled from 'styled-components'

export const TextSearched = styled.input`
    padding: 7px;
    height: 39px;
    width: 30vw;
    border-radius: 8px;
    border: none;
    ::placeholder{
        font-size: 17px
    }
`

export const Header = styled.header`

    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;

    div{
        display: flex;
        flex-direction: column;
    }

    span{
        color: #ff0c00;
        font-size: 20px;
        font-weight: 500;
        
    }

`
export const RepositoryCard = styled.div`
    box-sizing: border-box;
    width: 50vw;
    max-height: 25vh;
    padding: 10px;
    gap: 5vw;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    border-radius: 8px;
    border: none;

    figure{
        margin: 0;
        width: 10%;
        height: 20vh;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    img{
        width: 60vw;
        height: 15vh;
        background-color: #f9f9f9;
        border: 2px dotted #c9c9c9;
        border-radius:8px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: 55%;
    }

    h1{
        color: #00127a;
        font-size: 20px;
        font-family: sans-serif;
        margin-top: 0;
        a{
            text-decoration: none;
            color: inherit
        }
    }

    p{
        color: #00127a;
        font-size: 16px;
        margin: 0;
    }

`

export const ListResults = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

`