import supabase from '../supabase/client';

export const signInWithGoogle = async () => {
  return await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

export const logOut = async () => {
  await supabase.auth.signOut()
}
