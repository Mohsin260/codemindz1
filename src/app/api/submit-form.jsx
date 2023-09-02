

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Access the form data from the request body
      const formData = req.body;
      // Perform server actions with the form data
      // ...
      // Return a response
      res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }