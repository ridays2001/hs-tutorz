import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { EmailIcon, SheetIcon, WhatsAppIcon } from '../components/icons';
import ContactSection from '../styles/ContactSection';

const ContactPage = () => (
	<Layout page='contact'>
		<SEO title='Contact Us' description='The contact page.' />
		<ContactSection className='col-md-9 mx-auto text-center'>
			<h1 className='text-center my-5'>Get In Touch</h1>
			<section className='row col-md-9 mx-auto'>
				<div className='col-md-6'>
					Email Us on <span className='highlight'>{process.env.GATSBY_EMAIL}</span>
					<br />
					or click on the button below:
					<br />
					<br />
					<a href={`mailto:${process.env.GATSBY_EMAIL}`} className='btn btn-primary'>
						<EmailIcon /> &ensp; Email
					</a>
				</div>
				<div className='col-md-6' id='num'>
					Call or WhatsApp Us on <span className='highlight'>+91 {process.env.GATSBY_PHONE}</span>
					<br />
					or click on the button below:
					<br />
					<br />
					<a
						href={`https://wa.me/91${process.env.GATSBY_PHONE?.replace(/\s/g, '')}`}
						className='btn btn-primary'
					>
						<WhatsAppIcon /> &ensp; WhatsApp
					</a>
				</div>
				<div className='col-12 my-5'>
					Or you can fill the following contact form and we will get back to you within 24 hours.
					<br />
					<br />
					<a href={process.env.GATSBY_CONTACT_FORM} className='btn btn-primary'>
						<SheetIcon /> &ensp; Contact Form
					</a>
				</div>
			</section>
		</ContactSection>
	</Layout>
);

export default ContactPage;
