import React, { useEffect, useState } from 'react';
import './querycomp.css';
import { getDocs, collection, query, orderBy } from 'firebase/firestore';
import { storage } from '../../firebase/Setup';
import MyModal from '../ModalCenter/MyModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faJetFighter } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader/Loader';

export function QueryComp({modal,toggleModal}) {
  const queryRef = query(
    collection(storage, "queries"),
    orderBy("createdAt","desc")
  );

  // const q = query(collection(storage, "queries"), orderBy("createdAt", "desc"));
  const [queryData, setQueryData] = useState([]);
  const [queryColors, setQueryColors] = useState([]);

  const getQuery = async () => {
    try {
      setIsLoading(true)
      const data = await getDocs(queryRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        timestamp: doc.data().createdAt,
        email: doc.data().email,
        username: doc.data().username
      }));
      setIsLoading(false)
      setQueryData(filterData);
      const colors = generateRandomColors(filterData.length);
      setQueryColors(colors);
    } catch (err) {
      alert(err);
    }
  };

  const formatTime = (timestamp) => {
    const dateObj = timestamp.toDate();
    const formattedTime = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    return formattedTime;
  };

  const formatDate = (timestamp) => {
    const dateObj = timestamp.toDate();
    const formattedDate = `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;
    return formattedDate;
  };

  const generateRandomColors = (num) => {
    const colors = {
      0: "#1B3A4B",
      1: "#D83367",
      2: "#F3B431",
      3: "#35B7F3",
      4: "#5A3E6A",
      5: "#C19D4E",
      6: "#8F53A5",
      7: "#4A93B6",
      8: "#F06A39",
      9: "#2D7F60",
      10: "#3E2F6B",
      11: "#E1A7B7",
      12: "#56C4B1",
      13: "#F1D15D",
      14: "#BD4C1E",
      15: "#2F8E74",
  };
  
    const min = 1;
    const max = 14;
    let colorsArray = [];

    for (let i = 0; i < num; i++) {
      let randomKey;
      let randomColor;
      do {
        randomKey = Math.floor(Math.random() * (max - min + 1)) + min;
        randomColor = colors[randomKey] || 'black';
      } while (randomColor === '#ffffff' || randomColor === 'white' || randomColor === '#fff');
      colorsArray.push(randomColor);
    }
    return colorsArray;
  };

  let navigate = useNavigate();
  const handleIconClick = (query) => {
    navigate(`/querydetails/${query.id}`, { state: { query } })
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await getQuery();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const userInfo = JSON.parse(sessionStorage.getItem('user-info'));
  const first = String(userInfo.name)[0];

  const setQuery =(query) => {
    if(query.length>100) {
      return String(query).slice(0,99)+"..."
    } else {
      return query
    }
  }

  return (
    <div className='main-query' style={{overflow:"hidden"}}>
      <div className='query-box'>
      {queryData.map((query, index) => (
        <div className='query-card' key={query.id}>
          <div
            className='query-head'
            style={{
              background: queryColors[index],
            }}
          >
            <div className='head-name-email'>
              <h1>{query.username}</h1>
              <p>{query.email}</p>
            </div>
            <div
              className='head-icon'
              onClick={() => handleIconClick(query)}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
          <div className='query-content'>
            <div className='query-text'>
              <p>{setQuery(query.query)}</p>
            </div>
            <div className='query-footer'>
              <p>{formatTime(query.timestamp)}</p>
              <p>{formatDate(query.timestamp)}</p>
            </div>
          </div>
        </div>
      ))}
      {modal && (
        <MyModal
          toggleModal={toggleModal}
          modal={modal}
          getQuery={getQuery}
        />
      )}
      {isLoading && (
        <Loader />
      )}
    </div>
    </div>
  )
}

export default QueryComp;
