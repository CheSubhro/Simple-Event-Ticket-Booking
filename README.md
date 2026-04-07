🎟️ Smart Event Ticket Booking System
A high-performance full-stack web application designed to manage event registrations seamlessly. Built with FastAPI and React, this app ensures real-time seat tracking and a smooth user experience.

✨ Features
🤖 Real-time Seat Tracking: Dynamic updates using polling to show available vs booked seats.

🚫 Duplicate Prevention: Backend logic to prevent multiple bookings from the same email.

📊 Admin Dashboard: A professional Ant Design Table to view and manage all bookings.

🗑️ Easy Cancellation: One-click ticket cancellation that instantly restores seat availability.

⚡ Async Backend: Powered by FastAPI and Motor for non-blocking database operations.

🖼️ Project Screenshots
<p align="center">
<img src="https://via.placeholder.com/800x400?text=Dashboard+Overview" width="80%" alt="Dashboard" />


<i>Admin Dashboard & Real-time Statistics</i>
</p>

<p align="center">
<img src="https://via.placeholder.com/800x400?text=Booking+Modal+Form" width="80%" alt="Booking Form" />


<i>Modal-based Booking Form with Validation</i>
</p>

🛠️ Tech Stack
Frontend:

React.js (Vite)

Ant Design (UI Framework)

Axios (API Communication)

Lucide React (Icons)

Backend:

Python & FastAPI

Motor (Async MongoDB Driver)

Pydantic (Schema Validation)

UUID (Unique Ticket Generation)

Database:

MongoDB Atlas (Cloud-based NoSQL)

🚀 Getting Started
1. Clone the repository
Bash
git clone https://github.com/CheSubhro/Simple-Event-Ticket-Booking.git
cd Simple-Event-Ticket-Booking
2. Backend Setup
Navigate to the backend folder:

Bash
cd backend
Install dependencies:

Bash
pip install -r requirements.txt
Create a .env file and add your MongoDB URI:

Code snippet
MONGO_DETAILS=your_mongodb_atlas_uri
Run the server:

Bash
uvicorn main:app --reload
3. Frontend Setup
Navigate to the frontend folder:

Bash
cd frontend
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
📝 License
This project is for educational purposes as part of a Fullstack Development learning journey.

👨‍💻 Author
CheSubhro

GitHub: @CheSubhro
