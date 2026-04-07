
import { Row, Col, Card, Statistic } from 'antd';
import { Ticket, Users, CheckCircle } from 'lucide-react';

const StatusCards = ({ status }) => (
    <Row gutter={16}>
        <Col span={8}>
            <Card bordered={false}>
                <Statistic title="Total Seats" value={status.total_seats} prefix={<Ticket size={20} />} />
            </Card>
        </Col>
        <Col span={8}>
            <Card bordered={false}>
                <Statistic title="Booked" value={status.booked_seats} valueStyle={{ color: '#cf1322' }} prefix={<Users size={20} />} />
            </Card>
        </Col>
        <Col span={8}>
            <Card bordered={false}>
                <Statistic title="Available" value={status.seats_left} valueStyle={{ color: '#3f8600' }} prefix={<CheckCircle size={20} />} />
            </Card>
        </Col>
    </Row>
);

export default StatusCards;