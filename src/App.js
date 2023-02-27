import React, { Component } from 'react'
import './index.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        login: "",
        email: "",
        pass: "",
        pass2: ""
      }
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: value
      }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.data)
  }

  render() {
    const { login, email, pass, pass2 } = this.state.data
    console.log(this.state.data.login)
    return (

      <div className='w-screen h-screen flex justify-center items-center' >
        {/* Form */}
        <form className='m-auto w-full md:w-1/3 h-2/3 backdrop-blur-sm text-white rounded-md border border-solid border-white flex flex-col justify-center items-center' onSubmit={this.handleSubmit} >

          {/*login*/}
          <label label htmlFor='login' className='w-2/3 relative' >
            <span className='w-full text-left absolute z-20 top-[-16] hover:top-0 transition-all ease-in-out duration-300'>Twój login:</span>
            <input
              className='w-full bg-transparent backdrop-blur-sm border-b-2 outline-none border-white focus:border-red-600 mt-1 transition-color duration-300 ease-in-out'
              type="text" id='login' name='login' value={login} onChange={(e) => this.handleInputChange(e)} />
          </label >

          {/* Email */}
          <label label htmlFor='email' className='mt-6 w-2/3' >
            <span className='w-full text-left'>Twój email:</span>
            <input
              className='w-full bg-transparent backdrop-blur-sm border-b-2 outline-none border-white focus:border-red-600 mt-1 transition-color duration-300 ease-in-out'
              type="text" id='email' name='email' value={email} onChange={(e) => this.handleInputChange(e)} />
          </label >

          {/* Password */}
          <label label htmlFor='pass' className='mt-6 w-2/3' >
            <span className='w-full text-left'>Wprowadź hasło:</span>
            <input
              className='w-full bg-transparent backdrop-blur-sm border-b-2 outline-none border-white focus:border-red-600 mt-1 transition-color duration-300 ease-in-out'
              type="text" id='pass' name='pass' value={pass} onChange={(e) => this.handleInputChange(e)} />
          </label >

          {/* Password 2 */}
          <label label htmlFor='pass2' className='mt-6 w-2/3'>
            <span className='w-full text-left'>Powtórz hasło:</span>
            <input
              className='w-full bg-transparent backdrop-blur-sm border-b-2 outline-none border-white focus:border-red-600 mt-1 transition-color duration-300 ease-in-out'
              type="text" id='pass2' name='pass2' value={pass2} onChange={(e) => this.handleInputChange(e)} />
          </label >

          {/* Submit */}
          <button button className='mt-14 w-2/3 bg-red-600 hover:bg-red-700 transition-color duration-300 ease-in-out rounded-md py-2 px-4 text-white'> Zarejestruj </button>
        </form >
      </div >

    )
  }
}
