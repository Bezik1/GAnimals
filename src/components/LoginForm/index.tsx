import { useRef } from "react"
import Input from "../UI/Input"
import Submit from "../UI/Submit"
import Title from "../UI/Title"
import "./index.css"
import { useUser } from "../../contexts/UserContext"
import { useAlert } from "../../contexts/AlertContext"
import axios from "axios"
import { GET_USERS_ANIMALS_API_URL, LOGIN_API_URL } from "../../const/api"
import { GAnimal, ReqLoginUser, User } from "../types/Data"
import { useNavigate } from "react-router-dom"
import { useGAnimals } from "../../contexts/GAnimalsContext"
import { Response } from "../types/Response"

const LoginForm = () =>{
    const navigate = useNavigate()
    const { setNewAlert } = useAlert()
    const { setUser } = useUser()
    const { setGAnimals } = useGAnimals()
    const usernameInputRef = useRef<HTMLInputElement>(null!)
    const emailInputRef = useRef<HTMLInputElement>(null!)
    const passswordInputRef = useRef<HTMLInputElement>(null!)


    const handleSubmit = async () =>{
        try {
            const userLoginReq: ReqLoginUser = {
                name: usernameInputRef.current.value,
                email: emailInputRef.current.value,
                password: passswordInputRef.current.value,
            }
            const res = await axios.post<Response<User>>(LOGIN_API_URL, userLoginReq)

            if(res.status !== 200) { setNewAlert(`${res.status} Validation Error`); return; }
            setUser(res.data.body)

            const resAnimals = await axios.post<Response<GAnimal[]>>(`${GET_USERS_ANIMALS_API_URL}/${res.data.body.id}`)
            if(resAnimals.status !== 200) { setNewAlert(`${res.status} Validation Error`); return; }
            setGAnimals(resAnimals.data.body)

            navigate('/ganimals')
        } catch(err) {
            setNewAlert(`Login Validation Error: ${err}`)
        }
    }

    return (
        <div className="login-form">
            <Title className="form-title">Login Form</Title>
            <div className="form-input-container">
                <Input placeholder="Username" type="string" ref={usernameInputRef} />
                <Input placeholder="E-mail" type="string" ref={emailInputRef}/>
                <Input placeholder="Password" type="password" ref={passswordInputRef}/>
            </div>
            <Submit label="Submit" onClick={handleSubmit}/>
        </div>
    )
}

export default LoginForm