import React from 'react';
import { FiMeh, FiZap, FiDollarSign, FiClock } from 'react-icons/fi';

const Reason = () => {
  // Style objects
  const containerStyle = {
    padding: '6rem 2rem',
    background: '#f9fafb',
    position: 'relative'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '1rem'
  };

  const subHeadingStyle = {
    fontSize: '1.125rem',
    color: '#4b5563',
    maxWidth: '700px',
    margin: '0 auto 3rem',
    lineHeight: 1.6
  };

  const reasonGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const reasonCardStyle = {
    background: '#ffffff',
    borderRadius: '0.75rem',
    padding: '2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
    textAlign: 'left'
  };

  const iconContainerStyle = {
    width: '3rem',
    height: '3rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem'
  };

  return (
    <section style={containerStyle} id="reasons">
      <div style={contentStyle}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          borderRadius: '999px',
          background: '#e0e7ff',
          color: '#4f46e5',
          marginBottom: '1rem'
        }}>
          <FiMeh style={{ marginRight: '0.5rem' }} />
          <span style={{ fontWeight: 600 }}>Tantangan Kreatif</span>
        </div>
        
        <h2 style={headingStyle}>
          Pilihan ide kreatif yang terbatas, biaya tinggi, dan memakan waktu
        </h2>
        
        <p style={subHeadingStyle}>
          Mengapa metode tradisional seringkali menjadi hambatan dalam mendapatkan desain ideal
        </p>
        
        <div style={reasonGridStyle}>
          <div style={reasonCardStyle}>
            <div style={{ ...iconContainerStyle, background: '#ecfdf5' }}>
              <FiZap style={{ color: '#10b981', fontSize: '1.25rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.25rem', color: "black" }}>
              Ide Kreatif Terbatas
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Hanya mendapat 1-2 konsep dari satu desainer, tanpa variasi pilihan
            </p>
            <ul style={{ color: '#6b7280', paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Perspektif kreatif yang sempit</li>
              <li style={{ marginBottom: '0.5rem' }}>Sulit mendapatkan ide out-of-the-box</li>
              <li>Ketergantungan pada satu gaya desain</li>
            </ul>
          </div>
          
          <div style={reasonCardStyle}>
            <div style={{ ...iconContainerStyle, background: '#ffedd5' }}>
              <FiDollarSign style={{ color: '#f97316', fontSize: '1.25rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.25rem', color: "black" }}>
              Biaya Tidak Efisien
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Struktur biaya yang membebani tanpa jaminan hasil memuaskan
            </p>
            <ul style={{ color: '#6b7280', paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Biaya agency yang sangat tinggi</li>
              <li style={{ marginBottom: '0.5rem' }}>Freelancer premium sulit terjangkau</li>
              <li>Biaya revisi dan perubahan yang tak terduga</li>
            </ul>
          </div>
          
          <div style={reasonCardStyle}>
            <div style={{ ...iconContainerStyle, background: '#e0e7ff' }}>
              <FiClock style={{ color: '#4f46e5', fontSize: '1.25rem' }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.25rem', color: "black" }}>
              Proses Memakan Waktu
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Siklus kerja panjang dari pencarian hingga finalisasi desain
            </p>
            <ul style={{ color: '#6b7280', paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Waktu screening desainer</li>
              <li style={{ marginBottom: '0.5rem' }}>Proses revisi berulang-ulang</li>
              <li>Koordinasi tim yang tidak efisien</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        div[style*="reasonCardStyle"]:hover {
          transform: translateY(-5px);
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          borderColor: '#d1d5db'
        }
        
        @media (max-width: 768px) {
          div[style*="reasonGridStyle"] {
            grid-template-columns: 1fr;
          }
          
          div[style*="reasonCardStyle"] {
            padding: '1.5rem';
          }
        }
      `}</style>
    </section>
  );
};

export default Reason;