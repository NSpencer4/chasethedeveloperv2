type ContactResponse = {
  success: boolean;
  message: string;
};

export const submitContact = async (
  name: string,
  email: string,
  message: string,
  scraperCheck: string
): Promise<ContactResponse> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      message,
      scraperCheck,
    }),
  });

  return response.json();
};
