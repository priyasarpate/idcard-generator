import React, { Component } from 'react';
import './form.css';
import './idcard.css';
import Idcard from './Idcard';

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      college: 'Collge Name',
      name: 'Name',
      class: null,
      address: null,
      DOB: null,
      bloodGroup: null,
      contact: null,
      year: null,
      code: null,
    }
  }


  handleChangeName = (event) => {
    this.setState({
      name: event.target.value

    })
  }

  handleChangeClass = (event) => {
    this.setState({
      class: event.target.value

    })
  }

  handleChangeAddress = (event) => {
    this.setState({
      address: event.target.value

    })
  }

  handleChangeDOB = (event) => {
    this.setState({
      DOB: event.target.value

    })
  }
  handleChangeBloodGroup = (event) => {
    this.setState({
      bloodGroup: event.target.value

    })
  }
  handleChangeContact = (event) => {
    this.setState({
      contact: event.target.value

    })
  }
  handleChangeStudentCode = (event) => {
    this.setState({
      code: event.target.value

    })
  }
  handleChangeYear = (event) => {
    this.setState({
      year: event.target.value

    })
  }

  handleChangeName = (event) => {
    this.setState({
      college: event.target.value

    })
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className='form-container form-box'>
          <div className="form-group">
                <label for="inputAddress"></label>
                <input type="text" className="form-control-top" id="inputAddress" placeholder="college Name"
                  value={this.state.college} onChange={this.handleChangeName}
                />
              </div>
            <form>
              <h1>Form</h1>
              <div className="form-group">
                <label for="inputAddress">Name:</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Student Name"
                  value={this.state.name} onChange={this.handleChangeName}
                />
              </div>

              <div className="form-group">
                <label for="inputAddress2">Address:</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Student Address"
                  value={this.state.address} onChange={this.handleChangeAddress}
                />
              </div>

            
              <div className="row">

              <div className="form-group col-md-6">
                <label for="inputAddress">Class:</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Class"
                  value={this.state.class} onChange={this.handleChangeClass}
                />
              </div>
                <div className="form-group col-md-6">
                  <label for="inputCity">D-O-B: </label>
                  <input type="text" className="form-control" id="inputCity" placeholder='D-O-B'
                    value={this.state.DOB} onChange={this.handleChangeDOB}
                  />
                </div>
                </div>

                <div class="form-row">

                <div className="form-group col-md-6">
                  <label for="inputZip">BloodGroup:</label>
                  <input type="text" className="form-control" id="inputZip" placeholder='BloodGroup'
                    value={this.state.bloodGroup} onChange={this.handleChangeBloodGroup}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Contact:</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Contact Number"
                    value={this.state.contact} onChange={this.handleChangeContact}
                  />
                </div>
              </div>

              <div class="form-row">

              
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Year:</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Acadmic Year"
                    value={this.state.year} onChange={this.handleChangeYear}
                  />
                </div>
                
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Student Code:</label>
                  <input type="text" className="form-control" id="inputPassword4" placeholder="Student Code"
                    value={this.state.code} onChange={this.handleChangeStudentCode}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <Idcard data={this.state} />
        </div>
      </div>

    )
  }
}
export default Form;