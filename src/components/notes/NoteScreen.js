import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/notes'

export const NoteScreen = () => {

    const dispatch = useDispatch()

    const {active:note} = useSelector(state => state.notes)     
    const [formValues, handleInputChange, reset] = useForm( note );
    const {body, title, id} = formValues;

    const activeId = useRef(note.id)

    useEffect(() => {
        if(note.id !== activeId.current)    {
            reset( note )
            activeId.current = note.id
        }

    }, [note, reset ])

    useEffect(()=>{
        
        dispatch(activeNote(formValues.id, { ...formValues }))
        
    },[formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }




    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome"
                    className="notes__title-input"
                    name= "title"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                />

                <div className="text-container">
                    <textarea 
                        placeholder="What happened today?"
                        className="notes__textarea"
                        name= "body"
                        value={ body }
                        onChange={ handleInputChange }
                    >



                        
                    </textarea>

                    {

                        (note.url) 
                        && (

                            <div>

                                <div className="notes__image">
                            
                                    <img 
                                        src= {note.url}
                                        alt="img"
                                    />
                                </div>

                            </div>
                        )

                    }


                </div>
            
            </div>
            
    <div class="container" onClick={handleDelete}>
        <div class="button">
            <div class="icon">
                <i class="fas fa-eraser"></i>
            </div>
        </div>
    </div>
</div>
    )
}
