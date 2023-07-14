"use client"

import { useEffect, useState } from "react";
import { DataType } from "./data";
import './customSearch.scss';
import SearchIcon from '../assets/search';
import { Oval, TailSpin } from "react-loader-spinner";


const CustomSearch = (props: {data: DataType[]}) => {

    const [searchString, setSearchString] = useState('');
    const [resultList, setResultList] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(false);
    const [searchByKey, setSearchByKey] = useState(true);
    const [searchByValue, setSearchByValue] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if(searchString.length > 0){
                if(searchByKey && searchByValue){
                    let results = props.data?.filter(s => s.key.toLowerCase().includes(searchString.toLowerCase()) || s.name.toLowerCase().includes(searchString.toLowerCase()));
                    setResultList(results);
                }else if(searchByKey){
                    let results = props.data?.filter(s => s.key.toLowerCase().includes(searchString.toLowerCase()));
                    setResultList(results);
                }else{
                    let results = props.data?.filter(s => s.name.toLowerCase().includes(searchString.toLowerCase()));
                    setResultList(results);
                }
            }
            else setResultList([]);
            setLoading(false);
        }, 300)
    }, [searchString])

    useEffect(() => {
        console.log('options:', searchByKey);
        if(!searchByKey && !searchByValue) setSearchByKey(true)
    }, [searchByKey])
    
    useEffect(() => {
        console.log('options:', searchByValue);
        if(!searchByKey && !searchByValue) setSearchByValue(true)
    }, [searchByValue])

    return (
        <div className="search-container">

            <div className="search-checkbox">
                search by acronym 
                <input type='checkbox' 
                    className="input-checkbox" 
                    checked={searchByKey}
                    onChange={e => setSearchByKey(e.target.checked)}
                    />
            </div>

            <div className="search-checkbox">
                search by name 
                <input type='checkbox' 
                    className="input-checkbox" 
                    checked={searchByValue}
                    onChange={e => setSearchByValue(e.target.checked)}
                    />
                </div>

            <div id="input-container" className="input-container">
                <div className="search-icon">
                    {loading ?
                        <Oval
                            height={26}
                            width={26}
                            color="white"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="#9E9E9E"
                            strokeWidth={6}
                            strokeWidthSecondary={6}
                            /> 
                        :
                        <SearchIcon/>
                    }
                </div>
                <input type='text' className='custom-input'
                    value={searchString}
                    placeholder={'search what you want here..'}
                    onChange={e => setSearchString(e.target.value)}
                    />
            </div>

            <div className="result-container">
                {
                    loading ?
                        <Oval
                            height={26}
                            width={26}
                            color="white"
                            wrapperClass="results-loading-container"
                            ariaLabel='oval-loading'
                            secondaryColor="#9E9E9E"
                            strokeWidth={6}
                            strokeWidthSecondary={6}
                            /> 
                        :
                        resultList.map((res, index) => 
                            <p key={index} className="result-line">
                                {res.key}: {res.name}
                            </p>
                        )
                }
            </div>

        </div>
    )
}

export default CustomSearch;