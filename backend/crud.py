
# Booking logic (Find, Create, Update)

from database import booking_collection

# Read All Bookings
async def get_all_bookings_db():
    cursor = booking_collection.find()
    return await cursor.to_list(length=100)

# Using Email search specific user (For Validation)
async def get_booking_by_email(email: str):
    return await booking_collection.find_one({"user_email": email})

# 3. New booking save (Create)
async def add_booking_db(data: dict):
    await booking_collection.insert_one(data)
    return data

# 4. Ticket cancel (Delete)
async def delete_booking_db(t_id: str):
    result = await booking_collection.delete_one({"ticket_id": t_id})
    return result.deleted_count