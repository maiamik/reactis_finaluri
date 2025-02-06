import React, { useEffect, useState } from 'react'

export default function Notes(props) {

  const [noteFormActive, setNoteFormActive] = useState(false)
  const [notes, setNotes] = useState([])
  const [editNoteIndex, setEditNoteIndex] = useState(null)
  const [editTarget, setEditTarget] = useState("")
  const [newNote, setNewNote] = useState("")
  const [checkedIndex, setCheckedIndex] = useState([])
  const [deletedNotes, setDeletedNotes] = useState([])
  const [editedText, setEditedText] = useState("")
  const { isDay, filterQuery } = props

  function handleNoteformClose() {
    setNoteFormActive(false)
    setNewNote("")
    setEditTarget("")
    setEditNoteIndex(null)
  }

  function handleCreateNote() {
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNewNote(""); 
  }
  

  function handleCheck(index) {
    setCheckedIndex((prevIndex) => {
      if (Array.isArray(checkedIndex) && checkedIndex.includes(index)) {
        return (prevIndex.filter(i => i !== index))
      } else {
        return ([...prevIndex, index]) 
      }
    });
  }

  function handleDelete(index) {
    setDeletedNotes((prevIndex) => {
      return [...prevIndex, index]; 
    });
  }

  function activateEditNote(note, index) {
    setNoteFormActive(true)
    setEditTarget(note)
    setEditNoteIndex(index)
    setNewNote(note)
  }

  function handleEditNote() {    
    setNotes((prevNotes) =>
      prevNotes.map((note, index) =>
        index === editNoteIndex ? newNote : note
      )
    );
      setNewNote("");
      setEditedText(note);
      setEditTarget(null); 
      setEditNoteIndex(null);
      setNoteFormActive(false);
    
  }
  

  const pencilPng = (
    <svg width="16" height="16" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 
      10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 
      1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 
      3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736"
       stroke="#6C63FF" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )

  const trashCanPng = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 
      14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z" stroke="#E50000"/>
      <path d="M14.625 3.75H3.375" stroke="#E50000" strokeLinecap="round"/>
      <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#E50000"/>
      <path d="M10.5 9V12.75" stroke="#E50000" strokeLinecap="round"/>
      <path d="M7.5 9V12.75" stroke="#E50000" strokeLinecap="round"/>
    </svg>
  )

  useEffect(() => {
    localStorage.setItem('checkedIndex', JSON.stringify(checkedIndex));
    
  }, [checkedIndex]);

  useEffect(() => {
    const savedCheckedIndex = JSON.parse(localStorage.getItem('checkedIndex'));
    if (savedCheckedIndex) {
      setCheckedIndex(savedCheckedIndex);
    }
  }, []);

  const filteredNotes = notes.filter(note => 
    note.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <>
      {noteFormActive? 
      (
      <div className='note-form-overlay'>
      <button className='note-form-overlay-btn' 
      onClick={handleNoteformClose}>
      </button>
      <div className='note-form'> 
        <h3>{editNoteIndex !== null ? 'Edit Note' : 'New Note'}</h3>
        <input 
          className='new-note-input'
          placeholder='Input your Note...'
          value={newNote}
          onChange={(e)=>{(setNewNote(e.target.value))}}
          />
          <div className="note-form-btn-div">
            <button className='note-form-btn cancel-btn'
             onClick={handleNoteformClose}>Cancel</button>
            <button className='note-form-btn apply-btn' 
            onClick={() => {
              if (!editTarget || editTarget.length === 0) {
                handleCreateNote();
              } else {
                handleEditNote();
              }
            }}>
              Apply
            </button>
            
          </div>
        </div>
      </div>
      ) : (null)}
      <div className='list-div'>  
        {notes.length? 
        (
        <div className='todo-list'>
          {
          filteredNotes.length != 0 ? 
            filteredNotes.map((note, noteIndex) => {
              if (deletedNotes.includes(noteIndex)) {
                return null; 
              }

              return (
                <div className='note-div' key={noteIndex}> 
                  <div className='todo-text-div'>
                    <button 
                      className='checkbox'
                      style={{
                        backgroundColor: Array.isArray(checkedIndex) && checkedIndex.includes(noteIndex) ? '#6C63FF' : 'white',
                      }}
                      onClick={() => { handleCheck(noteIndex) }}
                    >
                      {Array.isArray(checkedIndex) && checkedIndex.includes(noteIndex) ? 
                        <i className="fa-solid fa-check"></i> : null}
                    </button>
                    <div className={Array.isArray(checkedIndex) && checkedIndex.includes(noteIndex) ? 'checked-font' : ''}>
                      {note}
                    </div>
                  </div>
                  <div className='todo-btn-div'>
                    <button className='todo-btn edit-btn' onClick={() => { activateEditNote(note, noteIndex) }} >
                      {pencilPng}
                    </button>
                    <button className='todo-btn delete-btn' onClick={() => { handleDelete(noteIndex) }} >
                      {trashCanPng}
                    </button>
                  </div>     
                </div>
              );
            }) 
          : (
            <div className='empty-noted-div'>
              {isDay? (
              <img
              src='./EmptyNotesLight.png'
              />
              ) : (
              <img
              src='./EmptyNotesDark.png'
              />)}
              <h4 style={{ color: isDay ? "black" : "white" }}>Empty...</h4>
            </div>) 
        }
        </div>
        ):(
        <div className='empty-noted-div'>
          {isDay? (
          <img
          src='./EmptyNotesLight.png'
          />
          ) : (
          <img
          src='./EmptyNotesDark.png'
          />)}
          <h4 style={{ color: isDay ? "black" : "white" }}>Empty...</h4>
        </div>)}
      </div>
      <button className="add-note-btn"
        onClick={()=> {setNoteFormActive(true)}}
      >
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_18_253)">
          <circle cx="29" cy="29" r="25" fill={isDay?"#6C63FF":"#534CC2"}/>
          </g>
          <path fillRule="evenodd" clipRule="evenodd" d="M27.5 38.8916C27.5 39.2891 27.658 39.6704 27.9393 39.9514C28.2206 40.2325 28.6022 40.3904 29 40.3904C29.3978 40.3904 29.7794 40.2325 30.0607 39.9514C30.342 39.6704 30.5 39.2891 30.5 38.8916V29.8988H39.5C39.8978 29.8988 40.2794 29.7409 40.5607 29.4598C40.842 29.1787 41 28.7975 41 28.4C41 28.0025 40.842 27.6213 40.5607 27.3402C40.2794 27.0591 39.8978 26.9012 39.5 26.9012H30.5V17.9084C30.5 17.5108 30.342 17.1296 30.0607 16.8485C29.7794 16.5675 29.3978 16.4095 29 16.4095C28.6022 16.4095 28.2206 16.5675 27.9393 16.8485C27.658 17.1296 27.5 17.5108 27.5 17.9084V26.9012H18.5C18.1022 26.9012 17.7206 27.0591 17.4393 27.3402C17.158 27.6213 17 28.0025 17 28.4C17 28.7975 17.158 29.1787 17.4393 29.4598C17.7206 29.7409 18.1022 29.8988 18.5 29.8988H27.5V38.8916Z" fill="#F7F7F7"/>
          <defs>
          <filter id="filter0_d_18_253" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_253"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_253" result="shape"/>
          </filter>
          </defs>
        </svg>
      </button>
    </>
  )
}
