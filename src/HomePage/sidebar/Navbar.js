import React, { useEffect, useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faFlask, faMoneyBillWheat, faPlusMinus, faJetFighter, faRightFromBracket, faArrowDownAZ, faPen } from '@fortawesome/free-solid-svg-icons';
import Search from '../SearchBar/Search';
import QueryComp from '../Queries/QueryComp';



function Navbar() {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const [modal, setModel] = useState(false);

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const toggleModal = () => {
    setModel(!modal)
  }

  const barItems = [
    {
      name: "Technology",
      icon: <FontAwesomeIcon icon={faMicrochip} />
    }, {
      name: "Science",
      icon: <FontAwesomeIcon icon={faFlask} />
    }, {
      name: "Farming",
      icon: <FontAwesomeIcon icon={faMoneyBillWheat} />
    }, {
      name: "Maths",
      icon: <FontAwesomeIcon icon={faPlusMinus} />
    }
  ]

  const userCreds = JSON.parse(sessionStorage.getItem('user-creds'));
  const userInfo = JSON.parse(sessionStorage.getItem('user-info'));

  useEffect(() => {
    if (!userCreds) {
      navigate('/')
    }
  }, [navigate, userCreds]);

  const handleSignOut = () => {
    sessionStorage.removeItem('user-creds');
    sessionStorage.removeItem('user-info');
    navigate('/')
  }

  const first = String(userInfo.name)[0];

  return (
    <div style={{overflowY:"hidden"}}>
      <div className='header-main'>
        <div className={isOpen ? "top_section" : "closed_top_section"} style={{
          display:"flex",
          alignItems:"center",
          gap:"20px",
          marginLeft:"10px"
        }}>
          <div style={{ fontSize: isOpen ? "20px" : "20px" }} className='bars' onClick={toggle}>
            {isOpen ? "X" : ">>"}
          </div>
          <h1 className='logo'>{<FontAwesomeIcon icon={faJetFighter} />} Agritech Nexus</h1>
        </div>
        <h3>{first}</h3>
      </div>
      <div className="container">
        <div style={{
          minWidth: isOpen ? "270px" : "70px",
          maxWidth: isOpen ? "fitContent" : "70px",
        }}
          className='sidebar'>
          <Search setIsOpen={setIsOpen} isOpen={isOpen} toggle={toggle} />
          <div className='list-items'>
            <div className='quick' style={{
              display: "flex",
              margin: "10px",
              gap: "4px",
              justifyContent: "center"
            }}>
              <FontAwesomeIcon icon={faArrowDownAZ} />
              <h3
                style={{
                  display: isOpen ? "block" : "none"
                }}
              >Quick Search</h3>
            </div>
            <ul>
              {barItems.map((element, index) =>
                <li key={index}
                  className={isOpen ? "list" : "list-text"}
                >
                  <div className='icon'>{element.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className='task-nm'><p>{element.name}</p></div>
                </li>
              )}
            </ul>
          </div>
          <div className='question'>
            <div className='question-btn' onClick={() => toggleModal()}>
              <div className='add-query-icon'>
                <FontAwesomeIcon icon={faPen} />
              </div>
              <div className='add-query-text' style={{ display: isOpen ? "block" : "none" }}>
                
                Share your thoughts
              </div>
            </div>
          </div>
          <div className={isOpen ? "sidebar-foot" : "closed-sidebar-foot"}>
            <div className={isOpen ? "first-let" : "closed-let"}>{first}</div>
            <div className='name-email'>
              <h5 style={{ display: isOpen ? "block" : "none" }}>{userInfo.name}</h5>
              <p style={{ display: isOpen ? "block" : "none" }}>{userCreds.email}</p>
            </div>
          </div>
          <div className='signout-btn' onClick={handleSignOut}>
            <div className='signout-icon'>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
            <div className='signout-text' style={{ display: isOpen ? "block" : "none" }}>
              Sign Out
            </div>
          </div>
        </div>
        <main>
          <QueryComp modal={modal} toggleModal={toggleModal} />
        </main>
      </div>
    </div>
  )
}

export default Navbar
