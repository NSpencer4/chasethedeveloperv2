export const submitContact = (name: string, email: string, message: string, scraperCheck: string) => {
  // Robot check
  if (scraperCheck) {
    return new Promise((resolve, reject) => {
      reject('An error occurred.');
    });
  }

  return fetch('https://us-central1-spencer-tech-project.cloudfunctions.net/resume-contact-form', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
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
