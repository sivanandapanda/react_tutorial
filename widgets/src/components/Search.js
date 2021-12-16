import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        //can't mark the callback function in useEffect as async. 3 options are 2 below and other being promises

        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: debouncedTerm
                }
            });

            setResults(data.query.search);
        };

        if(debouncedTerm) {
            search();
        }

        /* (
            async () => {
                await axios.get('https://en.wikipedia.org/w/api.php')
            }
        )(); */
    }, [debouncedTerm]);

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span> // vunerable to XSS (cross site scripting attack, don't do it)
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input' value={term} onChange={e => setTerm(e.target.value)}></input>
                </div>    
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;
