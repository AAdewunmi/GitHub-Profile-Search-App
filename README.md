# 🚀 GitHub Profile Search App

## Description

The **GitHub Profile Search App** is a web application that allows users to search for GitHub profiles by username and view detailed information, including profile data and public repositories. This project is designed to demonstrate modern web development practices using HTML, CSS, and JavaScript, and to provide a simple, user-friendly interface for exploring GitHub user data.

---

## Table of Contents

- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)
- [Acknowledgments](#acknowledgments)

---

## Installation Instructions

1. **Clone the repository:**

   ```sh
   git clone https://github.com/AAdewunmi/github-profile-search-app.git
   cd github-profile-search-app
   ```

2. **Install dependencies (for testing):**

   ```sh
   npm install
   ```

3. **Open the app:**
   - Open `index.html` directly in your browser, or
   - Use a local development server (recommended for best results):
     ```sh
     npx live-server
     ```
   - Or use the "Go Live" extension in VS Code.

---

## Usage

1. **Search for a GitHub User:**

   - Enter a GitHub username in the search field.
   - Click the "Search" button.

2. **View Profile:**

   - The app will display the user's profile information, including avatar, name, bio, and links.

3. **View Repositories:**
   - The user's public repositories are listed with details such as name, description, language, and stars.

**Example:**

```sh
# Start the app (if using live-server)
npx live-server
```

Then, open your browser and go to `http://127.0.0.1:8080` (or the port shown in your terminal).

Screenshots

1. **Search for a User**

2. **View User and Repository**

---

## Features

- 🔍 Search for any GitHub user by username
- 👤 View detailed profile information (avatar, name, bio, location, etc.)
- 📦 List public repositories with language and star count
- ⚡ Responsive and modern UI using Bootstrap
- 🚫 Error handling for non-existent users
- 🧪 Unit tests for API integration (Mocha + Chai)

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository and create your branch from `main`.
2. Write clear, concise commit messages.
3. Ensure your code follows the existing style and passes all tests.
4. Submit a pull request with a description of your changes.

**Coding Standards:**

- Use semantic HTML and descriptive CSS class names.
- Write clean, readable JavaScript.
- Add comments and documentation where appropriate.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact Information

For questions, suggestions, or support, please contact:

- **Maintainer:** [Adrian Adewunmi]
- **Email:** your.email@example.com
- **GitHub:** [AAdewunmi](https://github.com/AAdewunmi)

---

## Acknowledgments

- [GitHub REST API](https://docs.github.com/en/rest)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/)
- [node-fetch](https://github.com/node-fetch/node-fetch)
- Special thanks to the open-source community and all contributors to this project.
