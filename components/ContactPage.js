/* contactuspage.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #0047AB;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-right: 20px;
  margin-left: 10px;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
}

.header-nav a {
  color: #DEB841;
  text-decoration: none;
  font-weight: bold;
  transition: box-shadow 0.15s;
}

.header-nav a:hover {
  box-shadow: 0 0 5px rgba(222, 184, 65, 0.3);
}

.search-bar {
  display: flex;
  align-items: right;
  margin-right: 20px;
  margin-left: 90px;
}

.sign-in-button {
  background-color: #DEB841;
  color: #784040;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: box-shadow 0.15s;
  margin-left: 20px;
  align-items: right;
}

.sign-in-button:hover {
  box-shadow: 0 0 5px rgba(222, 184, 65, 0.3);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer {
  background-color: #0047AB;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #FFFFFF;
}

.contact-us-text {
  font-weight: bold;
}

.support-button {
  background-color: #FFFFFF;
  color: #0047AB;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: box-shadow 0.15s;
  align-content: left;
}

.support-button:hover {
  box-shadow: 0 0 5px rgba(0, 71, 171, 0.3);
}

/* Support page styles */
.support-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.support-page h1 {
  margin-bottom: 20px;
}

.support-form {
  width: 400px;
  max-width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #DEB841;
}

.form-group textarea {
  height: 120px;
}

.form-group button {
  background-color: #DEB841;
  color: #FFFFFF;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: box-shadow 0.15s;
}

.form-group button:hover {
  box-shadow: 0 0 5px rgba(222, 184, 65, 0.3);
}
