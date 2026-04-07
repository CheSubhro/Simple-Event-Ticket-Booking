
import { Modal, Form, Input, InputNumber } from 'antd';

const BookingModal = ({ isOpen, onClose, onFinish, loading }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            title="Reserve Your Spot 🤖"
            open={isOpen}
            onCancel={onClose}
            onOk={() => form.submit()}
            confirmLoading={loading}
            okText="Confirm Booking"
        >
        <Form form={form} layout="vertical" onFinish={(values) => {
            onFinish(values);
            form.resetFields();
        }}>
            <Form.Item name="user_name" label="Full Name" rules={[{ required: true }]}>
                <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item name="user_email" label="Email Address" rules={[{ required: true, type: 'email' }]}>
                <Input placeholder="example@gmail.com" />
            </Form.Item>
            <Form.Item name="seats_requested" label="Number of Seats" initialValue={1}>
                <InputNumber min={1} max={5} style={{ width: '100%' }} />
            </Form.Item>
        </Form>
        </Modal>
    );
};

export default BookingModal;