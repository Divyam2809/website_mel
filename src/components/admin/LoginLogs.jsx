import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mockStorage from '../../services/mockStorage';
import AdminNav from './AdminNav';
import AdminSidebar from './AdminSidebar';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function LoginLogs() {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        if (!user || user.role !== 'superadmin') {
            navigate('/admin/dashboard');
            return;
        }
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        setLoading(true);
        const data = await mockStorage.getLoginLogs();
        setLogs(data || []);
        setLoading(false);
    };

    const exportPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('System Login Audits', 14, 22);

        doc.setFontSize(11);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

        const tableColumn = ["ID", "Username", "Role", "IP Address", "Status", "Details", "Time"];
        const tableRows = [];

        logs.forEach(log => {
            const rowData = [
                log.id,
                log.username,
                log.role || '-',
                log.ip_address,
                log.status,
                log.details,
                new Date(log.login_time).toLocaleString()
            ];
            tableRows.push(rowData);
        });

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 40,
            theme: 'grid',
            headStyles: { fillColor: [255, 155, 80] }, // Melzo Orange
        });

        doc.save('Login_Audit_Logs.pdf');
    };

    return (
        <div className="admin-layout">
            <AdminSidebar />
            <div className="admin-main-content">
                <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
                    <AdminNav />
                    <div style={{ height: '100px' }}></div>

                    <div className="admin-container" style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#1e293b' }}>Login Audit Logs</h2>
                                <p style={{ color: '#64748b' }}>Monitor system access attempts and security.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <button
                                    onClick={() => navigate('/admin/dashboard')}
                                    style={{
                                        padding: '10px 20px',
                                        background: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        color: '#64748b'
                                    }}
                                >
                                    Back to Dashboard
                                </button>
                                <button
                                    onClick={exportPDF}
                                    style={{
                                        background: '#FF9B50',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 24px',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontWeight: 700,
                                        boxShadow: '0 4px 15px rgba(255, 155, 80, 0.3)'
                                    }}
                                >
                                    Export PDF
                                </button>
                            </div>
                        </div>

                        <div className="table-container" style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                            {loading ? (
                                <div style={{ padding: '40px', textAlign: 'center' }}>Loading logs...</div>
                            ) : (
                                <table className="dashboard-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Username</th>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Role</th>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>IP Address</th>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Status</th>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Details</th>
                                            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {logs.length === 0 ? (
                                            <tr>
                                                <td colSpan="6" style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                                                    No logs found.
                                                </td>
                                            </tr>
                                        ) : (
                                            logs.map(log => (
                                                <tr key={log.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                    <td style={{ padding: '16px', fontWeight: '500' }}>{log.username}</td>
                                                    <td style={{ padding: '16px' }}>
                                                        {log.role && <span style={{
                                                            background: '#e0f2fe',
                                                            color: '#0369a1',
                                                            padding: '4px 10px',
                                                            borderRadius: '20px',
                                                            fontSize: '0.8rem',
                                                            fontWeight: '600'
                                                        }}>{log.role}</span>}
                                                    </td>
                                                    <td style={{ padding: '16px', fontFamily: 'monospace', color: '#64748b' }}>{log.ip_address}</td>
                                                    <td style={{ padding: '16px' }}>
                                                        <span style={{
                                                            color: log.status === 'Success' ? '#166534' : '#991b1b',
                                                            background: log.status === 'Success' ? '#dcfce7' : '#fee2e2',
                                                            padding: '4px 10px',
                                                            borderRadius: '6px',
                                                            fontWeight: '600',
                                                            fontSize: '0.85rem'
                                                        }}>
                                                            {log.status}
                                                        </span>
                                                    </td>
                                                    <td style={{ padding: '16px', color: '#64748b' }}>{log.details}</td>
                                                    <td style={{ padding: '16px', color: '#64748b', fontSize: '0.9rem' }}>
                                                        {new Date(log.login_time).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
