import supabase from '../supabase/client';

export const signInWithGoogle = async () => {
  return await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin
    }
  })
}

export const logOut = async () => {
  await supabase.auth.signOut()
}
