import React from 'react';
import './idcard.css';

function Idcard(props) {
    return (
            
            <div className='idcard'>
                <h1></h1>
                <p className="input-value-1">
                    Name:
              <span className="highlight"> {props.data.name}</span></p>
                <p className="input-value-2">
                    Class:
              <span className="highlight"> {props.data.class}</span></p>
                <p className="input-value-3">
                    Address:
              <span className="highlight"> {props.data.address}</span></p>
                <p className="input-value-4">
                    D-O-B:
              <span className="highlight"> {props.data.DOB}</span></p>
              <p className="input-value-4">
                    Blood-Group:
              <span className="highlight"> {props.data.bloodGroup}</span></p>
              <p className="input-value-4">
                    Contact:
              <span className="highlight"> {props.data.contact}</span></p>
              <p className="input-value-4">
                    Year:
              <span className="highlight"> {props.data.year}</span></p>
              <p className="input-value-4">
                    Student Code:
              <span className="highlight"> {props.data.code}</span></p>
              </div>
          
            )
        }
        export default Idcard;
