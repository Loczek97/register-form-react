import React, { Component } from 'react'
import CustomInput from './components/CustomInput';
import CustomCheckbox from './components/CustomCheckbox';
import CustomButton from './components/CustomButton';
import FormValidation from './components/FormValidation';
import PopupMessage from './components/PopupMessage';
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
        isAccepted: false,
      },

      errors: {
        login: false,
        email: false,
        passwords: false,
        isAccepted: false
      },

      isFormSubmitted: false
    }

    this.messages = {
      loginMess: {
        incorrect: 'Login musi mieć minimum 3 znaki',
      },
      emailMess: {
        incorrect: 'Niepoprawny adres email',
      },
      passwordsMess: {
        incorrect: 'Hasła muszą być takie same',
      },
      isAcceptedMess: {
        incorrect: 'Musisz zaakceptować regulamin'
      }
    }

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

  handleClosePopup = () => {
    this.setState({
      isFormSubmitted: false
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const errors = FormValidation(this.state.data)


    if (errors.hasOwnProperty('login') || errors.hasOwnProperty('email') || errors.hasOwnProperty('passwords') || errors.hasOwnProperty('isAccepted')) {
      this.setState({ errors })
    } else {
      this.setState({
        errors: {
          login: false,
          email: false,
          passwords: false,
          isAccepted: false
        },

        data: {
          login: "",
          email: "",
          pass: "",
          pass2: "",
          isAccepted: false,
        },

        isFormSubmitted: true
      })

    }
  }


  render() {
    const { login, email, pass, pass2, isAccepted } = this.state.data
    const { errors, isFormSubmitted } = this.state
    const { loginMess, emailMess, passwordsMess, isAcceptedMess } = this.messages

    return (

      <div className='w-screen h-screen flex justify-center items-center box-border' >

        {/* Form */}
        <form className='m-auto w-full md:w-[50%] h-[80%] backdrop-blur-sm text-white rounded-md border border-solid border-white flex flex-col justify-center items-center'
          onSubmit={this.handleSubmit}
          autoComplete='off'
        >
          <h1 className='text-3xl text-red-600 font-semibold hover:scale-110 transition-all duration-300 ease-in-out'>
            Zarejestruj się
          </h1>

          {/*login*/}
          <CustomInput
            type="text"
            name='login'
            value={login}
            id='login-input'
            onChange={(e) => this.handleInputChange(e)}
            text='Login'
            error={errors.login}
            errorMess={loginMess}
          />


          {/* Email */}
          <CustomInput
            type="text"
            name='email'
            value={email}
            id='email-input'
            onChange={(e) => this.handleInputChange(e)}
            text='Email'
            error={errors.email}
            errorMess={emailMess}
          />


          {/* Password */}
          <CustomInput
            type="password"
            name='pass'
            value={pass}
            id='pass-input'
            onChange={(e) => this.handleInputChange(e)}
            text='Hasło'
            error={errors.passwords}
            errorMess={passwordsMess}
          />


          {/* Password 2 */}
          <CustomInput
            type="password"
            name='pass2'
            value={pass2}
            id='pass2-input'
            onChange={(e) => this.handleInputChange(e)}
            text='Powtórz hasło'
            error={errors.passwords}
            errorMess={passwordsMess}
          />


          {/* Checkbox */}

          <CustomCheckbox
            name='isAccepted'
            id='isAccepted'
            text='Akceptuję regulamin'
            checked={isAccepted}
            onChange={(e) => this.handleCheckBoxChange(e)}
            error={errors.isAccepted}
            errorMess={isAcceptedMess}
          />

          {/* Submit */}
          <CustomButton>Zarejestruj się</CustomButton>
        </form >
        {/* Popup */}
        {isFormSubmitted && <PopupMessage isOpen={isFormSubmitted} onClose={this.handleClosePopup} />}
      </div >
    )
  }
}