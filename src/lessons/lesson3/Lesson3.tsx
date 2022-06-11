import React, {ChangeEvent, useState} from 'react';
import API from './API';
import './lesson_3';
import nullPost from './logo/nullPost.jpg'

type DataSearchType = {
    Title: string
    Year: string
    Type: string
    Poster: string
}


const Lesson3 = () => {
    const [searchName, setSearchName] = useState<string>('');
    const [serachResult, setSerachResult] = useState<Array<DataSearchType>>([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');
    const [serachResultError, setSerachResultError] = useState<string>('');

    const searchFilm = () => {
        if (searchName.match(/^[a-z0-9]+$/) && searchName.length >= 3) {
            API.searchFilmsByTitle(searchName)
                .then(response => {
                        if (response.data.Response==="True") {
                            setSerachResult(response.data.Search)
                            console.log(response)
                            setSearchName('')
                        } else {
                            console.log(response)
                            setSerachResultError('Ничего не найдено')
                            setSerachResult([])
                        }
                    }
                )
                .catch(error => console.log(`Беда пришла отседа -${error}`))
        } else {
            console.log('1111')
            setSerachResult([])
            setSerachResultError('only latin letters and numbers 3 characters long')
        }
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)

    }

    const writeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.currentTarget.value)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={writeHandler}/>
                <button onClick={searchFilm}>Search</button>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px'}}>
                    { serachResult.length ?
                        serachResult.map(el => <div>
                            <div>{el.Title + ' ' + el.Year}</div>
                            <img style={{width: '200px'}} src={el.Poster !== 'N/A' ? el.Poster : nullPost}
                                 alt={'logo'}/></div>) :
                        <div>{serachResultError}</div>
                    }
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t="movie">Movie</button>
                <button onClick={searchByType} data-t="series">Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;