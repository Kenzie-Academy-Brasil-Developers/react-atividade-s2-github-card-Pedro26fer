import { ListResults, RepositoryCard } from "../../styled/Button/style"


function Card({resultSearch}){

    return(
        <ListResults>
            {resultSearch.map((result,index) => {
               return (<li key={index}>
                    <RepositoryCard>
                        <figure>
                            <img src={result.owner.avatar_url} alt={result.full_name}/>
                        </figure>
                        <div>
                            <h1><a href={result.clone_url} target="_blank" rel="noreferrer">{result.full_name}</a></h1>
                            <p>{result.description}</p>
                        </div>
                    </RepositoryCard>
                </li>)
            })}
        </ListResults>
    )

}

export default Card