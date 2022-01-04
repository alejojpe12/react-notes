import React from 'react'
import { Sidebar } from './Sidebar'
import { NothingSelected } from './NothingSelected'
import { NoteScreen } from '../notes/NoteScreen'
import { useSelector } from 'react-redux'
import { animation } from '../../helpers/animation'

export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes)

    return (
        <div className={`journal__main-content ${animation}`  }> 

      <Sidebar />
  
            <main>
                {
                    (active) 
                        ?<NoteScreen />
                        :<NothingSelected />
                }
            </main>
        </div>
    )
}