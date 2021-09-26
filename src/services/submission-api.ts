const submissionEndpoint = process.env['CF-SUBMISSION-ENDPOINT'] || '';

export const submitContact = (name: string, email: string, message: string, scraperCheck: string) => {
  // Robot check
  if (scraperCheck) {
    return new Promise((resolve, reject) => {
      reject('An error occurred.');
    });
  }

  return fetch(submissionEndpoint, {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({ 'Content-type': 'application/json' }),
    body: JSON.stringify({
      name,
      email,
      message,
      scraperCheck
    })
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
