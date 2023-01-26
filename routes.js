const fs = require('fs');

const handleRequest = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/contact') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      '<form action="/register" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form>'
    );
    return res.end();
  }

  if (url === '/register' && method === 'POST') {
    const data = [];

    req.on('data', (chunk) => data.push(chunk));

    req.on('end', () => {
      const parsedBody = Buffer.concat(data).toString();
      const username = parsedBody.split('=')[1];

      fs.writeFile(
        'contact-card.txt',
        `Username: ${username}\nAge: 19\nJob: Backend developer`,
        (err) => {
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        }
      );
    });
  }
};

module.exports = {
  handleRequest,
};
