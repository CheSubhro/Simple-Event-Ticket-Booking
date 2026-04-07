🎟️ Smart Event Ticket Booking System
A high-performance Full-Stack Registration Engine built with FastAPI & React.

🚀 Overview
This application is a streamlined solution for managing event ticket sales. It bridges the gap between a fast, asynchronous Python backend and a reactive, component-based frontend to provide instant seat updates and automated booking management.

✨ Key Features
  🤖 Real-time Analytics: Dynamic "Seats Left" tracker using polling to keep users updated without page refreshes.
  
  🚫 Smart Validation: Backend logic layer to prevent duplicate registrations via email.
  
  📊 Pro-Admin Dashboard: Managed with Ant Design Tables, allowing admins to track every attendee in a structured view.
  
  ⚡ Asynchronous Core: Leverages FastAPI & Motor for ultra-fast, non-blocking DB operations.
  
  🗑️ One-Click Cancellation: Instantly release seats back into the pool with automated database cleanup.

<div align="center">
<img src="https://github.com/user-attachments/assets/2a54885e-b99d-48a3-aea7-b799e8e07a9a" width="90%" alt="Main Dashboard" style="border-radius: 10px; margin-bottom: 20px;" />
<p><i>The central hub showing real-time statistics and attendee management.</i></p>

<img src="https://github.com/user-attachments/assets/05e97aec-85fe-49bb-a3a1-b498139f9957" width="45%" alt="Booking Modal" />
<img src="https://github.com/user-attachments/assets/50f23f10-9eca-4a18-9452-b09e3d83e7f9" width="45%" alt="Success Notification" />
<p><i>Elegant Modal Forms & Instant Notification System.</i></p>

<img src="https://github.com/user-attachments/assets/b2be5ba8-b9e4-4515-85c5-1cebc2652cec" width="90%" alt="Swagger Docs" />
<p><i>Self-documenting Interactive API (Swagger UI).</i></p>
</div> 

git clone https://github.com/CheSubhro/Simple-Event-Ticket-Booking.git
cd Simple-Event-Ticket-Booking

cd backend
pip install -r requirements.txt
# Create .env and add MONGO_DETAILS
uvicorn main:app --reload

cd ../frontend
npm install
npm run dev

👨‍💻 Developed By
CheSubhro Full-Stack Developer


