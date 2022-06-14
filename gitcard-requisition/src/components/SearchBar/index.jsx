import {Button, styled} from '@mui/material'
import { Header, TextSearched } from '../../styled/Button/style'
import { useState } from 'react'
import Api from '../../services/Api'

const BtnSearch = styled(Button)(() => ({
    height: '48px',
    padding: '8px',
    marginTop: '3.5px'
}))


function SearchBar({resultSearch,setResultSearch}){

    const [inputValue,setInputValue] = useState('')
    const [error, setError] = useState('')

    const textSearched = (e) => {
        setInputValue(e.target.value)
    }

    const getSearched = async () => {

        try
            {const response = await Api.get(inputValue)  
                console.log(response.data)
                const newResult = response.data     
                setResultSearch([...resultSearch, newResult])
                setError('')
        }
         catch(e){
            console.log(e)

            !inputValue? 
            setError('Você precisa digitar algo') 
            :
            setError('Repositório não encontrado')
        }
    } 

    return (
        <Header>
            <div>
                <TextSearched type="text" value={inputValue} onChange={(e) => textSearched(e)} placeholder='nome-do-usuário/repositório'/>
                {error && (<span>{error}</span>)}
            </div>
            <BtnSearch variant='contained' onClick={() => getSearched()} >Pesquisar</BtnSearch>
        </Header>
    )

   
}



export default SearchBar