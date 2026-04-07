
# MongoDB connection (Motor)

import motor.motor_asyncio
import os
from dotenv import load_dotenv

load_dotenv() # .env file read 

MONGO_DETAILS = os.getenv("MONGO_DETAILS")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

# Database nam: event_db | Collection nam: bookings 
database = client.event_db
booking_collection = database.get_collection("bookings")