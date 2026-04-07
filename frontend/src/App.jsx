import React, { useState, useEffect } from 'react';
import { Layout, Button, notification, ConfigProvider, theme } from 'antd';
import { Ticket } from 'lucide-react';
import api from './api/axiosInstance';

// Components Import
import StatusCards from './components/StatusCards';
import BookingTable from './components/BookingTable';
import BookingModal from './components/BookingModal';

const { Header, Content } = Layout;

const App = () => {
	const [status, setStatus] = useState({ total_seats: 50, booked_seats: 0, seats_left: 50, message: "" });
	const [bookings, setBookings] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const fetchData = async () => {
		try {
		  const [statusRes, listRes] = await Promise.all([
			api.get('/status'),
			api.get('/all-bookings')
		  ]);
		  setStatus(statusRes.data);
		  setBookings(listRes.data.bookings);
		} catch (e) { console.error("Data fetch error"); }
	};
	
	useEffect(() => {
		fetchData();
		const interval = setInterval(fetchData, 10000);
		return () => clearInterval(interval);
	}, []);
	
	const handleBooking = async (values) => {
		setLoading(true);
		try {
		  await api.post('/book', values);
		  notification.success({ message: 'Booking Confirmed! 🎉' });
		  setIsModalOpen(false);
		  fetchData();
		} catch (error) {
		  notification.error({ message: 'Failed', description: error.response?.data?.detail });
		} finally { setLoading(false); }
	};
	
	const handleDelete = async (t_id) => {
		try {
		  await api.delete(`/cancel/${t_id}`);
		  notification.success({ message: 'Deleted!' });
		  fetchData();
		} catch (e) { notification.error({ message: 'Error' }); }
	};

  	return (
		<ConfigProvider theme={{ algorithm: theme.defaultAlgorithm, token: { primaryColor: '#1677ff' } }}>
			<Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
				<Header style={{ background: '#001529', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<h2 style={{ color: 'white', margin: 0 }}>Robotics Workshop 2026 🤖</h2>
				<Button type="primary" shape="round" icon={<Ticket size={18} />} 
						onClick={() => setIsModalOpen(true)} disabled={status.seats_left === 0}>
					{status.seats_left === 0 ? "Sold Out" : "Book Now"}
				</Button>
				</Header>

				<Content style={{ padding: '50px' }}>
				<StatusCards status={status} />
				<h3 style={{ textAlign: 'center', margin: '30px 0' }}>{status.message}</h3>
				<BookingTable bookings={bookings} onDelete={handleDelete} />
				</Content>

				<BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} 
							onFinish={handleBooking} loading={loading} />
			</Layout>
		</ConfigProvider>
  	);
};

export default App;