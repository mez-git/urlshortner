URL Shortener Project
This project is a TypeScript-based MERN (MongoDB, Express, React, Node.js) stack application that allows users to shorten URLs. It includes features to delete URLs and copy shortened links to the clipboard. The project is styled using Tailwind CSS for a responsive and modern UI.

Features
URL Shortening: Convert long URLs into short, easy-to-share links.
Delete URLs: Remove URLs that are no longer needed.
Copy to Clipboard: Instantly copy the shortened URL with a single click.
Responsive UI: Designed with Tailwind CSS for a seamless experience on all device sizes.
Technologies Used
Frontend: React (with TypeScript), Tailwind CSS
Backend: Node.js, Express.js (with TypeScript)
Database: MongoDB (Mongoose)
Build Tool: Vite (for fast development and optimized builds)
Setup and Installation
Prerequisites
Node.js: Make sure you have Node.js installed. Download here
MongoDB: Install MongoDB locally or use a cloud service like MongoDB Atlas.
Steps
Clone the Repository

bash
Copy code
git clone https://github.com/<your-username>/<your-repo-name>.git
Install Dependencies

Navigate to the project folder and install the required dependencies for both the frontend and backend:

bash
Copy code
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
Set Up Environment Variables

In the /server directory, create a .env file with the following environment variables:

env
Copy code
MONGO_URI=your-mongodb-connection-string
PORT=5000
Run the Application

To start the project, run both the frontend and backend servers.

bash
Copy code
# Start the backend server
cd server
npm run dev

# Start the frontend server
cd ../client
npm run dev
Access the Application

The application should now be running on:

Frontend: http://localhost:3000
Backend: http://localhost:5001
Folder Structure
bash
Copy code
project-root/
│
├── client/         # React frontend with TypeScript and Tailwind CSS
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/         # Node.js, Express.js, MongoDB backend with TypeScript
│   ├── src/
│   ├── models/
│   ├── controllers/
│   └── ...
│
└── README.md       # Project documentation
Usage
Enter a long URL in the input field to get a shortened version.
Use the "Copy" button to copy the shortened URL to your clipboard.
View a list of previously shortened URLs.
Delete a URL from the list if it’s no longer needed.
Contributing
Contributions are welcome! If you want to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes and commit (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to update this template based on any additional features or requirements you have for your project!









