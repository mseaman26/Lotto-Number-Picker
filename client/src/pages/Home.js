import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
const { loading, data } = useQuery(QUERY_USERS)
const users = data?.users || []

const apiKey = '41afa2b638msh3f22d0547e8ca2ap195'

useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '41afa2b638msh3f22d0547e8ca2ap195e88jsn66cc9c003763',
            'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
        }
    };
    
    fetch('https://twitter135.p.rapidapi.com/AutoComplete/?q=Elon', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}, [])


return(
    <Link
        to={'/super_lotto_plus'}
        >
            Super Lotto Plus
    </Link>
)

// return (
//     <div>
//        {loading ? (
//         <div>
//             loading... : ()
//         </div>
//        ) : (
//         users.map((user) => (
//             <div>

//                 <h1>
//                     {user.username}
//                 </h1>
//                 <h1>
//                     {user.email}
//                 </h1>
//             </div>
//         ))
//        )}
//     </div>
//     )
}
export default Home