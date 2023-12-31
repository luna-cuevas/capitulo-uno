'use client';
import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabaseClient } from '@/utils/SupabaseClient';
import { useStateContext } from '@/context/StateContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

type Props = {};

const SignIn = (props: Props) => {
  const supabase = supabaseClient();
  const [loading, setLoading] = React.useState(true);
  const { state, setState } = useStateContext();

  useEffect(() => {
    const { data: authListener } =
      supabase.auth.onAuthStateChange(handleAuthChange);
    // Simulate a delay for the loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      authListener.subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  const handleAuthChange = async (event: any, session: any) => {
    console.log('session', session);
    if (event === 'SIGNED_IN' && session !== null) {
      console.log('session', event);
      localStorage.setItem('session', JSON.stringify(session));
      localStorage.setItem('user', JSON.stringify(session.user));
      setState({
        ...state,
        session,
        user: session.user,
      });
      console.log('session', session);
      toast.success('Signed in successfully');

      setState({
        ...state,
        signInActive: false,
      });
    } else if (event === 'SIGNED_OUT') {
      console.log('session', event);
      console.log('SignIn Failed');

      toast.error('Sign in failed');
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
            signInActive: false,
          });
        }}
      />

      <div className="z-[20000001] rounded-2xl fixed max-w-[800px] md:w-2/3 bottom-0 m-auto top-0    left-0 right-0 h-fit pt-8 bg-[#F7F1EE] border-[6px] border-[#71C0A6] ">
        <div className="flex flex-col">
          <div className="flex ">
            <h2 className="uppercase font-sans leading-[60px] p-4 lg:p-10 text-right tracking-[0.3rem] m-auto text-2xl lg:text-4xl">
              Members Login
            </h2>
          </div>
          <div className="flex lg:w-[60%] w-[90%] m-auto ">
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="m-auto w-full">
              <Auth
                supabaseClient={supabase}
                appearance={{
                  style: {
                    button: {
                      width: 'fit-content',
                      maxWidth: '100%',
                      textTransform: 'uppercase',
                      background: '#EB8828',
                      color: 'white',
                      margin: '0 auto',
                      padding: '0.5rem 2rem',
                      borderRadius: '0.375rem',
                      fontFamily: 'sans-serif',
                    },
                    input: {
                      letterSpacing: '0.25rem',
                      textTransform: 'uppercase',
                      color: '#F7F1EE',
                      background: '#7F8019',
                      borderRadius: '0.375rem',
                      padding: '1rem 0.75rem',
                    },
                    message: {
                      fontSize: '18px',
                      color: '#ff0f0f',
                      margin: '0 0 20px 0',
                    },
                  },
                }}
                localization={{
                  variables: {
                    sign_in: {
                      email_label: '',
                      password_label: '',
                      email_input_placeholder: 'Email address',
                      password_input_placeholder: 'Password',
                      button_label: 'Sign in',
                    },
                    sign_up: {
                      link_text: '',
                    },
                  },
                }}
                providers={[]}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#71C0A6]  w-fit m-auto px-4 py-1 rounded-t-xl flex">
          <div className="flex w-fit m-auto gap-2">
            <p className="text-[#F7F1EE]">Don&apos;t have an account?</p>
            <Link
              onClick={() => {
                setState({
                  ...state,
                  signInActive: false,
                });
              }}
              className="font-sans m-auto text-sm text-black"
              href="/become-member">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
