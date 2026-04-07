
import { Table, Button, Card } from 'antd';

const BookingTable = ({ bookings, onDelete }) => {
    const columns = [
        { title: 'Name', dataIndex: 'user_name', key: 'user_name' },
        { title: 'Email', dataIndex: 'user_email', key: 'user_email' },
        { title: 'Seats', dataIndex: 'seats_booked', key: 'seats_booked' },
        {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Button danger type="link" onClick={() => onDelete(record.ticket_id)}>
            Cancel
            </Button>
        ),
        },
    ];

    return (
        <Card title="Admin: All Bookings List" style={{ marginTop: '40px' }}>
        <Table dataSource={bookings} columns={columns} rowKey="ticket_id" pagination={{ pageSize: 5 }} />
        </Card>
    );
};

export default BookingTable;