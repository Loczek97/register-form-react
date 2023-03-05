import React, { Component } from 'react'
import ValidateLogin from './components/ValidateLogin';
import ValidateEmail from './components/ValidateEmail';
import ValidatePasswords from './components/ValidatePasswords';
import './index.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        login: "",
        email: "",
        pass: "",
        pass2: "",
        isAccepted: false
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

  handleCheckBoxChange = (e) => {
    const { name } = e.target

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: !prevState.data[name]
      }
    }))
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const { data } = this.state
    const loginValid = ValidateLogin(data.login)
    const emailValid = ValidateEmail(data.email)
    const passwordsValid = ValidatePasswords(data.pass, data.pass2)

    if (data.login && data.email && data.pass && data.pass2 && data.isAccepted) {
      console.log(loginValid)
      console.log(emailValid)
      console.log(passwordsValid)
    }
  }




  render() {
    const { login, email, pass, pass2, isAccepted } = this.state.data

    const isFieldFilled = (fieldName) => {
      return this.state.data[fieldName].length > 0;
    };

    return (

      <div className='w-screen h-screen flex justify-center items-center box-border' >

        {/* Form */}
        <form className='m-auto w-full md:w-[40%] h-[70%] backdrop-blur-sm text-white rounded-md border border-solid border-white flex flex-col justify-center items-center' onSubmit={this.handleSubmit} >
          <h1 className='text-3xl text-red-600 font-semibold hover:scale-110 transition-all duration-300 ease-in-out'>
            Zarejestruj się
          </h1>

          {/*login*/}
          <div className='w-2/3 relative mt-10'>
            <input
              type="text"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-white appearance-none focus:border-red-600 focus:outline-none peer"
              placeholder=" "
              name='login'
              value={login}
              id='login-input'
              onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="login-input"
              className="absolute duration-300 transform -translate-y-6 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:translate-y-4 peer-focus:-translate-y-6">Login</label>
          </div>


          {/* Email */}
          <div className='w-2/3 relative mt-10'>
            <input
              type="text"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-white appearance-none focus:border-red-600 focus:outline-none peer"
              placeholder=" "
              name='email'
              value={email}
              id='email-input'
              onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="email-input"
              className="absolute duration-300 transform -translate-y-6 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:translate-y-4 peer-focus:-translate-y-6">Email</label>
          </div>


          {/* Password */}
          <div className='w-2/3 relative mt-10'>
            <input
              type="password"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-white appearance-none focus:border-red-600 focus:outline-none peer"
              placeholder=" "
              name='pass'
              value={pass}
              id='pass-input'
              onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="pass-input"
              className="absolute duration-300 transform -translate-y-6 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:translate-y-4 peer-focus:-translate-y-6">Hasło</label>
          </div>


          {/* Password 2 */}
          <div className='w-2/3 relative mt-10'>
            <input
              type="password"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-white appearance-none focus:border-red-600 focus:outline-none peer"
              placeholder=" "
              name='pass2'
              value={pass2}
              id='pass2-input'
              onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="pass2-input"
              className="absolute duration-300 transform -translate-y-6 -z-10 origin-[0] peer-focus:text-red-600 peer-placeholder-shown:translate-y-4 peer-focus:-translate-y-6">Powtórz hasło</label>
          </div>


          {/* Checkbox */}
          <div className='w-2/3 mt-12'>
            <input type="checkbox" id='isAccepted' name='isAccepted' className='mr-2 accent-red-600 background-transparent rounded' checked={isAccepted} onChange={(e) => this.handleCheckBoxChange(e)} />
            <label htmlFor='isAccepted' className='text-left'>Akceptuję regulamin</label>
          </div >

          {/* Submit */}
          <button className='mt-4 w-2/3 bg-red-600 hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-color duration-300 ease-in-out rounded-md py-2 px-4 text-white'> Zarejestruj </button>
        </form >
      </div >
    )
  }
}