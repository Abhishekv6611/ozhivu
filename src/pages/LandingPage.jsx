import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import Logo from '../assets/mic.png';

export default function LandingPage() {
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
      if (isSignedIn) {
        navigate('/dashboard');
      }
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <>
      {/* Header */}
      <header className="fixed w-full z-50">
        <nav className=" border-gray-200 py-4 bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Ozhivu</span>
            </a>
            <div className="flex items-center lg:order-2">
              <SignedOut>
                <SignInButton mode="modal" asChild>
                  <CustomButton />
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 pt-28 pb-16 min-h-screen relative overflow-hidden">
        <div className="grid max-w-screen-xl mx-auto px-4 md:grid-cols-12 gap-10 items-center py-20">
          {/* Text Content */}
          <div className="md:col-span-7 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Where silence ends,<br className="hidden sm:block" /> stories begin
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              അവസാനിക്കുന്ന നിശബ്ദതയുടെ <span className="text-purple-700 font-medium">ഇടവേളയിൽ കഥകൾ</span> തുടക്കം കുറിക്കുന്നു
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <SignedOut>
                <SignInButton mode="modal" asChild>
                  <button className="cursor-pointer px-6 py-3 bg-purple-700 text-white rounded-lg text-sm font-medium hover:bg-purple-800 transition">
                    Sign Up
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>

        {/* Mic Image */}
        <div className="absolute bottom-0 right-0 w-full lg:w-auto flex justify-center lg:justify-end px-4 lg:px-10">
          <img
            src={Logo}
            alt="Podcast Microphone"
            className="w-48 sm:w-64 md:w-80 lg:w-[430px]"
          />
        </div>
      </section>
    </>
  );
}
