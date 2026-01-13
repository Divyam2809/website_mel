import React from 'react';

export default function NewsletterSection({ isDarkTheme }) {
    return (
        <section style={{
            padding: '5rem 5%',
            backgroundColor: isDarkTheme ? '#0F0F0F' : '#F8F8F8'
        }}>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    marginBottom: '1rem',
                    color: isDarkTheme ? '#FFFFFF' : '#2D2D2D'
                }}>
                    Inside the <span style={{ color: '#FF9B50' }}>Studio</span>
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: isDarkTheme ? '#AAA' : '#666',
                    marginBottom: '2.5rem',
                    lineHeight: '1.6'
                }}>
                    A weekly dispatch on design, code, and the future of digital craft.
                </p>

                <form
                    id="newsletter-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const email = e.target.email.value;

                        // Hide form and show success message
                        e.target.style.display = 'none';
                        document.getElementById('status-msg').style.display = 'block';

                        // Log email (optional - you can send to your backend here)
                        console.log("Captured email:", email);

                        // Open LinkedIn in new tab
                        const LINKEDIN_NEWSLETTER_URL = "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7341419739434405888";//add the linked in newsletter url
                        window.open(LINKEDIN_NEWSLETTER_URL, '_blank');

                        setTimeout(() => {
                            document.getElementById('status-msg').innerText = "Check your new tab to follow us on LinkedIn!";
                        }, 2000);
                    }}
                    style={{
                        display: 'flex',
                        gap: '12px',
                        maxWidth: '500px',
                        margin: '0 auto',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        style={{
                            flex: '1',
                            minWidth: '250px',
                            padding: '16px 20px',
                            border: isDarkTheme ? '1px solid #333' : '1px solid transparent',
                            borderRadius: '8px',
                            backgroundColor: isDarkTheme ? '#262626' : '#f4f4f4',
                            color: isDarkTheme ? '#FFF' : '#2D2D2D',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.2s ease',
                            fontFamily: 'Inter, sans-serif'
                        }}
                        onFocus={(e) => {
                            e.target.style.backgroundColor = isDarkTheme ? '#2a2a2a' : 'transparent';
                            e.target.style.borderColor = '#FF9B50';
                            e.target.style.boxShadow = '0 0 0 4px rgba(255, 155, 80, 0.1)';
                        }}
                        onBlur={(e) => {
                            e.target.style.backgroundColor = isDarkTheme ? '#262626' : '#f4f4f4';
                            e.target.style.borderColor = isDarkTheme ? '#333' : 'transparent';
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '16px 32px',
                            backgroundColor: isDarkTheme ? '#2D2D2D' : '#111111',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            fontFamily: 'Inter, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#0A66C2'; // LinkedIn blue
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = isDarkTheme ? '#2D2D2D' : '#111111';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Join
                    </button>
                </form>

                <div
                    id="status-msg"
                    style={{
                        display: 'none',
                        color: '#0077b5',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        marginTop: '1rem'
                    }}
                >
                    Redirecting to LinkedIn...
                </div>

                <p style={{
                    marginTop: '1rem',
                    fontSize: '0.85rem',
                    color: isDarkTheme ? '#666' : '#999'
                }}>
                    Follow us on LinkedIn to confirm subscription.
                </p>
            </div>
        </section>
    );
}
