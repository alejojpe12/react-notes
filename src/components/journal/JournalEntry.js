import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ( {id, date, title, body, url} ) => {

    const titleTrim = title.slice(-10);
    const bodyTrim = body.slice(-10);


    const noteDate = moment(date);
    const dispatch = useDispatch()
    const handleEntryClick= () => {
            dispatch(activeNote(id, {
                date, title, body, url
            })
        );
    }

    return (

        <div 
            className= {"journal__entry pointer animate__animated animate__flipInX"}
            onClick= { handleEntryClick }
        >
            <div className="journal__box-1">

                {
                    url&&
                    <div 
                        className="journal__entry-picture"
                        // style={{
                        //     backgroundSize: 'cover',
                        //     backgroundImage: `url(${url})`
                        // }}
                    >
                        <img src={url}  alt="" />
                    </div>
                }

            </div>

                    <div className="journal__body-entry journal__box-2">
                        <p className="journal__entry-title">
                            { titleTrim }
                        </p>
                        
                        <p className="journal__entry-body">
                            { bodyTrim }
                        </p>

                    </div>

                    <div className="journal__entry-date-box journal__box-3">
                        <span>{noteDate.format('dddd')}</span>
                        <h4>{noteDate.format('Do')}</h4>

                    </div>
        </div>
    )
}
