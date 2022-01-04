import moment from 'moment';
import React from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'


export const NotesAppBar = () => {
    const date = new Date();
    const noteDate = moment(date);

    const dispatch = useDispatch()
    const { active } = useSelector(state => state.notes)
    const handleSave = () => {
        dispatch( startSaveNote(active) )
    }

    const handlePictureClick = ()=> {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploading(file))
        }
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('dddd')}</span>
            <span>{noteDate.format('Do')}</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display: 'none'}}
                onChange={ handleFileChange }
            
            />


            <div>

                <button 
                    className="btn"
                    onClick= { handlePictureClick }
                >
                    <i class="far fa-images notes__icon"></i> 
                </button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                   <i class="far fa-save notes__icon"></i>
                </button>
            
            </div>

        </div>
    )
}
