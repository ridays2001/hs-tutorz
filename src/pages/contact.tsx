import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { EmailIcon, SheetIcon, WhatsAppIcon } from '../components/icons';
import ContactSection from '../styles/ContactSection';
import { Link } from 'gatsby';

const ContactPage = () => {
	const faqs: Array<{ que: string; ans: JSX.Element }> = [
		{
			que: 'Is it important to take any tutoring from class 9th onwards?',
			ans: (
				<span>
					Class 9 is the right stage to start serious preparations for your career and we feel that the
					standard classroom setting does not provide for every student's individual needs. Hence tutoring or
					coaching helps the child to be prepared for the competitive world outside.
				</span>
			)
		},
		{
			que: 'Why should we chose you?',
			ans: (
				<span>
					Our institute is backed by academicians. It is not being run by bussinessmen. Our interest is to
					produce the best results for our students.
				</span>
			)
		},
		{
			que: 'Are tutors available besides classes?',
			ans: (
				<span>
					Separate doubt solving sessions are arranged on regular intervals. Apart from that, the students can
					request for special doubt solving sessions on-demand. Also, after taking due appointments, the
					students/parents can have an online meeting with the tutors. In case of small education-related
					doubts, the students can send an email to a specified email address for doubts that will be given to
					them for such situations.
				</span>
			)
		},
		{
			que: 'Can lectures be cancelled once they are booked?',
			ans: (
				<span>
					Yes, the lectures can be cancelled upto 12 hours prior to the scheduled time. Also, they can be
					rescheduled upto 3 hours prior to the scheduled time. For more information, refer to the
					cancellation policy on the <Link to='/pricing'>pricing page</Link>.
				</span>
			)
		},
		{
			que: 'What payment methods do you accept?',
			ans: (
				<span>
					For people living in India, we accept Google Pay or direct bank transfer. For people living outside
					india, we accept PayPal and bank wire transfer.
				</span>
			)
		}
	];

	return (
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
						<a href={`mailto:${process.env.GATSBY_EMAIL}`} target='_blank' className='btn btn-primary'>
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
							target='_blank'
							className='btn btn-primary'
						>
							<WhatsAppIcon /> &ensp; WhatsApp
						</a>
					</div>
					<div className='col-12 my-5'>
						Or you can fill the following contact form and we will get back to you within 24 hours.
						<br />
						<br />
						<a href={process.env.GATSBY_CONTACT_FORM} target='_blank' className='btn btn-primary'>
							<SheetIcon /> &ensp; Contact Form
						</a>
					</div>
				</section>

				<section className='col-md-9 mx-md-auto my-5 text-start'>
					<h3 className='text-center mb-2'>FAQs</h3>
					<p>
						We have compiled a list of all frequently asked questions and put them here for your
						convenience. If you have a similar question to one of these, you can get your question answered
						immediately.
					</p>
					{faqs.map(q => (
						<Fragment>
							<span className='q'>{q.que}</span>
							<span className='a'>{q.ans}</span>
						</Fragment>
					))}
				</section>
			</ContactSection>
		</Layout>
	);
};

export default ContactPage;
