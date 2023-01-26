const { users } = require('./data');

const handleRequest = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>Welcome back!</h2>');

    res.write(
      '<h3>Create a new user</h3><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form>'
    );
    res.write('<a href="/users">All users</a>');
    return res.end();
  }

  if (url === '/users') {
    const liElements = users.map((user) => `<li>${user}</li>`).join('');
    const list = `<ul>${liElements}</ul>`;
    res.setHeader('Content-Type', 'text/html');
    res.write(list);
    res.write('<a href="/">Home page</a>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const data = [];
    req.on('data', (chunk) => data.push(chunk));
    req.on('end', (err) => {
      const parsedBody = Buffer.concat(data).toString();
      const username = parsedBody.split('=')[1];
      users.push(username);
      res.statusCode = 302;
      res.setHeader('Location', '/users');
      return res.end();
    });
  }
};

module.exports = { handleRequest };
