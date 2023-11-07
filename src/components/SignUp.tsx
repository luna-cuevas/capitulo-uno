'use client';
import { useStateContext } from '@/context/StateContext';
import { supabaseClient } from '@/utils/SupabaseClient';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {};

const SignUp = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, setState } = useStateContext();
  const [confirmPassword, setConfirmPassword] = useState('');

  const supabase = supabaseClient();

  const comparePasswords = () => {
    if (password === confirmPassword) {
      return true;
    }
    return false;
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    // i want password and confirm password to be checked if they are the same

    if (password.length < 6) {
      alert('password must be at least 6 characters');
      return;
    }
    if (!comparePasswords()) {
      alert('passwords do not match');
      return;
    } else {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        console.log('error', error);
        toast.error('Sign up failed');
      } else {
        console.log('data', data);
        toast.success('Signed up successfully');
        setState({
          ...state,
          signUpActive: false,
        });
      }
    }
  };

  return (
    <div
      className={`fixed w-full h-full top-0 bottom-0 left-0 right-0     flex m-auto z-[200000000] `}>
      <div
        className="fixed w-full h-full bg-gray-600 opacity-50 top-0 bottom-0 left-0 right-0 z-[20000000]"
        onClick={() => {
          setState({
            ...state,
            signUpActive: false,
          });
        }}
      />
      <div className="z-[20000001] flex rounded-2xl fixed max-w-[800px] md:w-2/3 bottom-0 m-auto top-0    left-0 right-0 h-fit pt-8 bg-[#F7F1EE] border-[6px] border-[#71C0A6]">
        <div className="flex ">
          <h2 className="uppercase font-sans leading-[60px] p-4 lg:p-10 text-right tracking-[0.3rem] m-auto text-2xl lg:text-4xl">
            Members Signup
          </h2>
        </div>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="w-2/3 gap-4 px-4 flex flex-col">
          <div className="flex flex-col m-auto w-full">
            <label htmlFor="email">Email</label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="w-full p-2"
              name="email"
              type="email"
            />
          </div>
          <div className="flex flex-col m-auto w-full">
            <label htmlFor="password">Password</label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="w-full p-2"
              name="password"
              type="password"
            />
          </div>
          <div className="flex flex-col m-auto w-full">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              className="w-full p-2"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
            />
          </div>
          <button
            className="bg-[#FAA629] m-auto my-4 px-4 py-2 text-white font-bold font-sans text-lg"
            type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
