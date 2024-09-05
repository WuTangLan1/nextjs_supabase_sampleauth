// src/hooks/useProfile.ts
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  // Fetch user profile from Supabase
  const fetchProfile = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('profiles').select('*').single();

    if (error) {
      console.error('Error fetching profile:', error.message);
    } else {
      setProfile(data);
    }

    setLoading(false);
  };

  // Update user profile
  const updateProfile = async (updates: any) => {
    setLoading(true);
    const { error } = await supabase.from('profiles').upsert(updates, { returning: 'minimal' });

    if (error) {
      console.error('Error updating profile:', error.message);
    } else {
      await fetchProfile(); // Refresh profile data
    }

    setLoading(false);
  };

  return { profile, loading, updateProfile };
};
