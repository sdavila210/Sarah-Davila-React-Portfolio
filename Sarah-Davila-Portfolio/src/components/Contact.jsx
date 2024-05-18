import { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));

        if (name === 'email' && value) {
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            setErrors({ ...errors, email: emailValid ? '' : 'Invalid email address' });
        } else {
            setErrors({ ...errors, [name]: value ? '' : `${name} is required` });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        const newErrors = {};
        if (!form.name) newErrors.name = 'Name is required';
        if (!form.email) newErrors.email = 'Email is required';
        if (!form.message) newErrors.message = 'Message is required';
        setErrors(newErrors);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleChange}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;