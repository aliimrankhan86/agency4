"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "../Button";
import Icon from "../Icon";

type LoginPromptProps = {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
};

const LoginPrompt = ({ isOpen, onClose, initialMode = "signin" }: LoginPromptProps) => {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  // Update mode when initialMode changes
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [isOpen, initialMode]);

  // Reset state when modal closes
  const handleClose = () => {
    setMode(initialMode);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setError("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    onClose();
  };

  // Switch between sign in and sign up
  const switchMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
    setError("");
  };

  // Handle OAuth provider sign in/up
  const handleProviderAuth = (provider: string) => {
    // TODO: Implement OAuth flow
    console.log(`${mode} with ${provider}`);
    // On success: handleClose()
  };

  // Handle email sign in
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // TODO: Implement sign in logic
    console.log("Sign in with:", { email, password });
    // On success: handleClose()
  };

  // Handle email sign up
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    // TODO: Implement sign up logic
    console.log("Sign up with:", { firstName, lastName, email, password });
    // On success: sign in the user, then handleClose()
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-md w-full bg-white rounded-2xl p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label="Close dialog"
          >
            <Icon name="close" />
          </button>

          <div className="text-center">
            <h2 className="font-onest text-3xl font-medium text-neutral-950">
              {mode === "signin" ? "Sign In Required" : "Create an account"}
            </h2>
            <p className="mt-4 font-figtree text-base text-neutral-500">
              {mode === "signin" 
                ? "Please sign in to access this feature" 
                : "Get started with Agency4 today"}
            </p>

            {/* Provider Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={() => handleProviderAuth("google")}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 hover:bg-neutral-50 transition-colors flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white font-figtree text-neutral-500">Or use your email</span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="font-figtree text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Forms */}
            <form onSubmit={mode === "signin" ? handleSignIn : handleSignUp} className="space-y-4">
              {mode === "signup" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                    />
                  </div>
                </>
              )}

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <Icon name={showPassword ? "eye-slash" : "eye"} size={20} />
                </button>
              </div>

              {mode === "signup" && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 pr-12 border border-neutral-200 rounded-lg font-figtree text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    <Icon name={showConfirmPassword ? "eye-slash" : "eye"} size={20} />
                  </button>
                </div>
              )}
              
              <Button type="submit" primary className="w-full">
                {mode === "signin" ? "Sign In" : "Create Account"}
              </Button>

              <p className="font-figtree text-sm text-neutral-500">
                {mode === "signin" ? (
                  <>
                    Don't have an account?{" "}
                    <button 
                      type="button"
                      onClick={switchMode}
                      className="text-blue-800 font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button 
                      type="button"
                      onClick={switchMode}
                      className="text-blue-800 font-medium hover:underline"
                    >
                      Sign in here
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default LoginPrompt;

