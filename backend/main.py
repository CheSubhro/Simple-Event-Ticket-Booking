
# FastAPI main routes

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import BookingRequest, BookingResponse
from uuid import uuid4
import crud  # Import our crud logic


app = FastAPI(title="Event Ticket Booking API")

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

TOTAL_SEATS = 50

@app.get("/")
async def home():
    return {"message": "Database Connected & API is Live!"}

@app.get("/status")
async def check_status():
    bookings = await crud.get_all_bookings_db() # Call from CRUD
    booked_count = sum(b["seats_booked"] for b in bookings)
    seats_left = TOTAL_SEATS - booked_count
    
    status_msg = "Available"
    if seats_left == 0: status_msg = "Sold Out"
    elif seats_left < 5: status_msg = f"Hurry Up! Only {seats_left} left"

    return {
        "total_seats": TOTAL_SEATS,
        "booked_seats": booked_count,
        "seats_left": seats_left,
        "message": status_msg
    }

# --- Book Ticket Logic ---
@app.post("/book", response_model=BookingResponse)
async def book_ticket(request: BookingRequest):
    # 1. Check current capacity
    bookings = await crud.get_all_bookings_db()
    booked_count = sum(b["seats_booked"] for b in bookings)
    if (booked_count + request.seats_requested) > TOTAL_SEATS:
        raise HTTPException(status_code=400, detail="Not enough seats!")

    # 2. Check duplicate email
    if await crud.get_booking_by_email(request.user_email):
        raise HTTPException(status_code=400, detail="Email already registered!")

    # 3. Create data and Save via CRUD
    new_data = {
        "ticket_id": str(uuid4()),
        "user_name": request.user_name,
        "user_email": request.user_email,
        "seats_booked": request.seats_requested,
        "status": "Confirmed"
    }
    return await crud.add_booking_db(new_data)

@app.get("/all-bookings")
async def list_bookings():
    bookings = await crud.get_all_bookings_db()
    for b in bookings: b.pop("_id", None)
    return {"bookings": bookings}

@app.delete("/cancel/{t_id}")
async def cancel_ticket(t_id: str):
    deleted = await crud.delete_booking_db(t_id)
    if deleted:
        return {"message": "Cancelled successfully"}
    raise HTTPException(status_code=404, detail="Ticket not found")    