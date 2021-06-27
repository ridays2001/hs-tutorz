import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { EmailIcon, SheetIcon, WhatsAppIcon } from '../components/icons';
import ContactSection from '../styles/ContactSection';

const ContactPage = () => (
	<Layout page='contact'>
		<SEO title='Contact Us' description='The contact page.' />
		<ContactSection className='col-md-9 mx-auto text-center'>
			<h1 className='text-center my-5'>Contact Us</h1>
			<section className='row col-md-9 mx-auto'>
				<div className='col-md-6'>
					Email Us on:
					<br />
					<br />
					<a href='mailto:hstutorialz@gmail.com' className='btn btn-secondary'>
						<EmailIcon /> &ensp; hstutorialz@gmail.com
					</a>
				</div>
				<div className='col-md-6'>
					Call or WhatsApp Us on:
					<br />
					<br />
					<a href='https://wa.me/919820093845' className='btn btn-secondary'>
						<WhatsAppIcon /> &ensp; +91 98200 93845
					</a>
				</div>
				<div className='col-12 my-5'>
					Or fill the following contact form to hear back from us within 24 hours.
					<br />
					<br />
					<a href={process.env.GATSBY_CONTACT_FORM} className='btn btn-secondary'>
						<SheetIcon /> &ensp; Contact Form
					</a>
				</div>
			</section>
		</ContactSection>
	</Layout>
);

export default ContactPage;
