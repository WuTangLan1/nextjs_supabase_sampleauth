// src/hooks/useAuth.ts
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { ProfileData } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<null | { id: string; email: string }>(null);
  const [loading, setLoading] = useState(false);

  // Sign Up Function
  const signUp = async (email: string, password: string, profileData: ProfileData) => {
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

    if (data.user) {
      const { error: profileError } = await supabase.from('users').insert({
        id: data.user.id,
        email: email,
        full_name: profileData.full_name,
        phone_number: profileData.phone_number,
        description: profileData.description,
        profile_photo_url: profileData.profile_photo_url,
      });

      if (profileError) {
        console.error('Error inserting profile data:', profileError.message);
        return;
      }
    }

    setUser({ id: data.user.id, email: data.user.email }); 
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

    setUser({ id: data.user.id, email: data.user.email });
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
