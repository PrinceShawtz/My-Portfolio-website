
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EmailIcon } from './icons/EmailIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GithubIcon } from './icons/GithubIcon';
import { CheckIcon } from './icons/CheckIcon';
import { MobileIcon } from './icons/MobileIcon';

const Contact: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLElement>();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isValidEmail, setIsValidEmail] = useState(false);

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(formState.email));
    }, [formState.email]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, phone, message } = formState;

        const recipientEmail = "eseokobiah1996@gmail.com";
        const subject = `New Portfolio Message from ${name}`;
        const body = `You've received a new message from your portfolio contact form:
        
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
`;
        
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" ref={ref} className="py-20 sm:py-32">
            <div className={`mx-auto max-w-7xl px-4 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center">
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Let's Build Together</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                        Have a project in mind or just want to connect? I'm always open to new opportunities and collaborations.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Contact Information Panel */}
                    <div className="rounded-2xl border border-cyan-500/20 bg-gray-900/50 p-8 shadow-lg backdrop-blur-sm">
                        <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent">
                            Contact Information
                        </h3>
                        <div className="mt-8 space-y-6">
                            <ContactInfoItem 
                                icon={<EmailIcon className="h-6 w-6 text-accent" />} 
                                label="Email" 
                                value="princeokobiah7@gmail.com" 
                                href="mailto:princeokobiah7@gmail.com"
                            />
                             <ContactInfoItem 
                                icon={<MobileIcon className="h-6 w-6 text-accent" />} 
                                label="Phone" 
                                value="646.708.7091"
                                href="tel:6467087091"
                            />
                            <ContactInfoItem 
                                icon={<LinkedinIcon className="h-6 w-6 text-accent" />} 
                                label="LinkedIn" 
                                value="Eseroghene Okobiah"
                                href="https://linkedin.com/in/eseroghene-okobiah-1b3885230"
                            />
                            <ContactInfoItem 
                                icon={<GithubIcon className="h-6 w-6 text-accent" />} 
                                label="GitHub" 
                                value="@PrinceShawtz"
                                href="https://github.com/PrinceShawtz"
                            />
                        </div>
                    </div>

                    {/* Send a Message Form Panel */}
                    <div className="rounded-2xl border border-pink-500/20 bg-gray-900/50 p-8 shadow-lg backdrop-blur-sm">
                        <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">
                            Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Your name" 
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                />
                            </div>
                             <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="your@email.com" 
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                    />
                                    {isValidEmail && (
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                            <CheckIcon className="h-5 w-5 text-green-500" />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">Phone (Optional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your phone number"
                                    value={formState.phone}
                                    onChange={handleInputChange}
                                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows={4} 
                                    placeholder="Your message..."
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full transform rounded-full bg-gradient-to-r from-accent to-secondary px-8 py-4 text-base font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ContactInfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, label, value, href }) => (
    <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-white transition-colors hover:text-accent">
                {value}
            </a>
        </div>
    </div>
);

export default Contact;
