import React, { useState } from 'react';
import { Phone, Lock, Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface AuthProps {
  onAuthComplete: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onAuthComplete }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [name, setName] = useState('');

  const text = {
    en: {
      welcome: isLogin ? 'Welcome Back!' : 'Join Our Community',
      subtitle: isLogin
        ? 'Login to continue your journey'
        : 'Start your empowerment journey today',
      phone: 'Phone Number',
      name: 'Your Name',
      otp: 'Enter OTP',
      sendOTP: 'Send OTP',
      verify: 'Verify & Continue',
      login: 'Login',
      signup: 'Sign Up',
      switchToSignup: "Don't have an account? Sign Up",
      switchToLogin: 'Already have an account? Login',
      resend: 'Resend OTP',
    },
    hi: {
      welcome: isLogin ? 'वापसी पर स्वागत है!' : 'हमारे समुदाय में शामिल हों',
      subtitle: isLogin
        ? 'अपनी यात्रा जारी रखने के लिए लॉगिन करें'
        : 'आज ही अपनी सशक्तिकरण यात्रा शुरू करें',
      phone: 'फ़ोन नंबर',
      name: 'आपका नाम',
      otp: 'OTP दर्ज करें',
      sendOTP: 'OTP भेजें',
      verify: 'सत्यापित करें और जारी रखें',
      login: 'लॉगिन',
      signup: 'साइन अप',
      switchToSignup: 'खाता नहीं है? साइन अप करें',
      switchToLogin: 'पहले से खाता है? लॉगिन करें',
      resend: 'OTP फिर से भेजें',
    },
  };

  const t = text[language];

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setShowOTP(true);
    }
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      onAuthComplete();
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3FF] flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-white">W</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.welcome}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <Card className="mb-4">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 text-[#A78BFA] hover:text-[#8B5CF6] transition-colors"
            >
              <Globe size={20} />
              <span className="font-medium">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>
          </div>

          <div className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-lg">{t.name}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none text-lg"
                  placeholder={t.name}
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">{t.phone}</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none text-lg"
                  placeholder="9876543210"
                  maxLength={10}
                />
              </div>
            </div>

            {!showOTP ? (
              <Button onClick={handleSendOTP} fullWidth size="lg" disabled={phone.length !== 10}>
                {t.sendOTP}
              </Button>
            ) : (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-lg">{t.otp}</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-[#A78BFA] focus:outline-none text-lg tracking-widest"
                      placeholder="123456"
                      maxLength={6}
                    />
                  </div>
                </div>

                <Button onClick={handleVerify} fullWidth size="lg" disabled={otp.length !== 6}>
                  {t.verify}
                </Button>

                <button
                  onClick={() => setShowOTP(false)}
                  className="w-full text-[#A78BFA] hover:text-[#8B5CF6] font-medium text-center"
                >
                  {t.resend}
                </button>
              </>
            )}
          </div>
        </Card>

        <div className="text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setShowOTP(false);
              setOtp('');
            }}
            className="text-gray-600 hover:text-[#A78BFA] transition-colors font-medium"
          >
            {isLogin ? t.switchToSignup : t.switchToLogin}
          </button>
        </div>

        <div className="mt-8 p-4 bg-white rounded-2xl shadow-md">
          <p className="text-center text-sm text-gray-600">
            {language === 'en'
              ? 'By continuing, you agree to our Terms of Service and Privacy Policy'
              : 'जारी रखकर, आप हमारी सेवा की शर्तों और गोपनीयता नीति से सहमत हैं'}
          </p>
        </div>
      </div>
    </div>
  );
};
