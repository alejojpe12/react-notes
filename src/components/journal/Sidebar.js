import React, { useState } from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import {  startNewNote } from '../../actions/notes'
export const photoDefault = "https://res.cloudinary.com/alejo-jpe/image/upload/v1629902279/guest_c84jr7.png"

export const Sidebar = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch( startLogout() )
    }

    const handleAddNew = () => {
        dispatch(startNewNote())
    }
        
    const state = useSelector(state => state.auth)
    
    const photoURL = state.photoURL
    const name = state.name 

    
    // const style2 = {
    //     background: 'black',
    //     width: '25px',
    //     color: 'white',
    //     border: 'none',
    //     cursor: 'pointer', 
    //     zIndex: '1',
    //     borderRadius: '5px'
    // };

    const [show, setShow] = useState('translateX(-100vw)')

    console.log(show)
    
    const HideShow = () => {
        if(show === 'translateX(-100vw)'){
            setShow('translateX(0vw)')
        } else {
            setShow('translateX(-100vw)')
        }
            
        
        console.log(show)
        
    } 
    let style = {
        transform : show,
        position: 'fixed',
        transition: 'all .3s ease-in-out',

        
    };
    
    return (

        
    <>



    <div onClick={HideShow} className="btn-box">
        <button className="button-30" ><i class="far fa-sticky-note"></i></button>
        
    </div>    

<div className='animate__animated animate__bounce' style={ style }>        
     <aside className="journal__sidebar"  >
        
                <div className="journal__sidebar-navbar">

            <div className="journal__profile">
                
                {
                    (photoURL)
                        ?<div className="profilePhoto">
                            <img src={ ` ${photoURL } `} alt="" />
                        </div>
                        
                        :<div className="profilePhoto">
                            <img src={ ` ${photoDefault } `} alt="" />
                        </div>
                }

                            <input 
                                id="fileSelector2"
                                type="file"
                                name="file"
                                style={{display: 'none'}}
                            />

                    <span className="journal__name mt-5 ml-5" >{name}</span>

            </div>


            <button 
                className="journal__logout btn"
                onClick={handleLogout}
            >
                Logout
            </button>

 
        </div>
        
        <div 
            className= "journal__new-entry"
            
        >

            <i
                className="far fa-calendar-plus fa-5x"
                onClick={ handleAddNew }
            >
            </i>

        </div>

            <JournalEntries />

</aside> 
        
</div>
    </>
    )
}
