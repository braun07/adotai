import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png';
import Apple from '../assets/apple.webp';
import Facebook from '../assets/facebook.webp';
import Google from '../assets/google.webp';
import { Navigate } from "react-router-dom";
import ArrowRight from '../assets/arrow-right.svg';


export const Login = () => {
    const [register, setRegister] = useState(false);

    return (
        register ? <>
            <div className='LoginScreen'>
                <button onClick={() => { setRegister(false) }} className='btn_back'><img src={ArrowRight} /></button>
                <img src={Logo} alt="LogoAdotai" className='LogoAdotai' />
                <div className='LoginScreen_inputs'>
                    <h1 className='margot title'>CADASTRO</h1>
                    <input type="text" className='input' placeholder='Nome' />
                    <input type="text" className='input' placeholder='Data de Nascimento' />
                    <input type="text" className='input' placeholder='E-mail' />
                    <input type="password" className='input' placeholder='Senha' />
                    <input type="password" className='input' placeholder='Repita a Senha' />
                </div>
                <button className='next'>
                    <img src={ArrowRight} alt="" />
                </button>
                <div className='LoginScreen_Social'>
                    <span>Ou acesse com</span>
                    <div className='LogosIMAGE'>
                        <img src={Google} alt="GoogleLogo" className='LogoLogin' />
                        <img src={Facebook} alt="FacebookLogo" className='LogoLogin' />
                        <img src={Apple} alt="AppleLogo" className='LogoLogin' />
                    </div>
                </div>
            </div>
        </> :
            <>
                <div className='LoginScreen'>
                    <img src={Logo} alt="LogoAdotai" className='LogoAdotai' />
                    <div className='LoginScreen_inputs'>
                        <h1 className='margot title'>LOGIN</h1>
                        <input type="text" className='input' placeholder='E-mail' />
                        <input type="text" className='input' placeholder='Senha' />
                    </div>
                    <a href="">Esqueci minha senha</a>
                    <div className='LoginScreen_BTN'>
                        <button className='register' type='button' onClick={() => { setRegister(true) }}>Registre-se</button>
                        <button className='login' type='button'>Entrar</button>
                    </div>

                    <div className='LoginScreen_Social'>
                        <span>Ou acesse com</span>
                        <div className='LogosIMAGE'>
                            <img src={Google} alt="GoogleLogo" className='LogoLogin' />
                            <img src={Facebook} alt="FacebookLogo" className='LogoLogin' />
                            <img src={Apple} alt="AppleLogo" className='LogoLogin' />
                        </div>
                    </div>
                </div>
            </>


    )
}
