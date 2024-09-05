// src/hooks/useAuth.ts
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sign Up Function
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      console.error('Error signing up:', error.message);
      return;
    }

    setUser(data.user);
  };

  // Login Function
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      console.error('Error signing in:', error.message);
      return;
    }

    setUser(data.user);
  };

  // Logout Function
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      setUser(null);
    }
  };

  return { user, loading, signUp, signIn, signOut };
};
