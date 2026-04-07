
# Pydantic Schema (Booking, Event)

from pydantic import BaseModel, EmailStr
from uuid import UUID, uuid4

# 1. User Input when booking
class BookingRequest(BaseModel):
    user_name: str
    user_email: str
    seats_requested: int = 1  # Default 1 seat

# 2. Booking successful (Output)
class BookingResponse(BaseModel):
    ticket_id: UUID
    user_name: str
    seats_booked: int
    status: str = "Confirmed"    