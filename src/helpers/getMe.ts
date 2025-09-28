export const getMe = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
    method: 'GET',
    next: { revalidate: 30 },
  });
  const user = await res.json();
  return user;
};
