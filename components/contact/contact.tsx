'use client';
import Heading from '../ui/heading';
import Button from '../ui/button';
import { Loader2, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Input from '../ui/input';
import {
  ContactUsQueryProps,
  createContactQuery,
} from '@/lib/Contentful/Contact/create-contact';
import { sendEmail } from '@/lib/email';

const Contact = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [contactNumber, setContactNumber] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [contactNumberError, setContactNumberError] = useState<string | null>(
    null
  );
  const [messageError, setMessageError] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  //Validate form with regex
  const validateForm = () => {
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const contactNumberRegex = /^[0-9]{10}$/;
    if (name && nameRegex.test(name!) && name?.length > 0) {
      setNameError(null);
    } else {
      setNameError('Please enter a valid name');
    }

    if (email && emailRegex.test(email)) {
      setEmailError(null);
    } else {
      setEmailError('Please enter a valid email');
    }

    if (contactNumber && contactNumberRegex.test(contactNumber!)) {
      setContactNumberError(null);
    } else {
      setContactNumberError('Please enter a valid contact number');
    }

    if (message && message?.length > 0) {
      setMessageError(null);
    } else {
      setMessageError('Please enter a message');
    }

    if (
      nameError === null &&
      emailError === null &&
      contactNumberError === null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid && name && email && contactNumber && message) {
      const data: ContactUsQueryProps = {
        name,
        email,
        contact: contactNumber,
        message,
      };
      try {
        setLoading(true);
        const res = await createContactQuery(data);
        const mail = await sendEmail(data);
        if (res && mail) {
          setLoading(false);
          setName('');
          setEmail('');
          setContactNumber('');
          setMessage('');
        }
      } catch (error) {
        setLoading(false);
        console.error('Error in sending email: ', error);
      }
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactNumber(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <section
      id='contact'
      className='relative flex flex-col gap-16 bg-black py-16 text-3xl text-white lg:flex-row lg:text-4xl'
    >
      <div className='flex w-full flex-col justify-between gap-14 px-6 lg:flex-row lg:px-32'>
        <div className='flex w-full flex-col gap-10 lg:w-1/3'>
          <Heading
            heading='CONTACT US'
            font='sherika'
            className='text-2xl lg:text-3xl'
          />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
              <Mail size={18} />
              <h2 className='text-base lg:text-xl'>
                artistbuildingstudio@gmail.com
              </h2>
            </div>
            <div className='flex items-center gap-3'>
              <Phone size={18} />
              <h2 className='text-base lg:text-xl'>+91-8269528424</h2>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <h2 className='h-full text-base lg:text-xl'>
              HIG 10, Old Subhash Nagar, Ashoka Garden, Bhopal, Madhya Pradesh,
              India
            </h2>
          </div>
        </div>
        <form
          className='flex w-full flex-col justify-evenly gap-5 lg:w-1/2'
          onSubmit={handleSubmit}
        >
          <Input
            name='Name'
            placeholder='Name'
            type='text'
            onChange={handleNameChange}
            errorMessage={nameError}
            value={name !== null ? name : ''}
          />
          <Input
            name='Email'
            placeholder='Email'
            type='email'
            onChange={handleEmailChange}
            // required
            errorMessage={emailError}
            value={email !== null ? email : ''}
          />
          <Input
            name='Contact Number'
            type='number'
            placeholder='Contact Number'
            // required
            onChange={handleContactNumberChange}
            errorMessage={contactNumberError}
            value={contactNumber !== null ? contactNumber : ''}
          />
          <textarea
            className={`h-20 max-h-40 w-full rounded-[4px] border border-white bg-transparent p-3 text-sm text-[#646464] outline-none  focus:border-purple-500 ${
              messageError
                ? 'border-red-500 focus:border-red-500'
                : 'border-white'
            }`}
            placeholder='Message'
            onChange={handleMessageChange}
            value={message !== null ? message : ''}
            // required
          />
          <div className='flex h-12 w-full items-center justify-start gap-3'>
            <Button
              className='flex items-center justify-center text-sm'
              type='submit'
            >
              {loading ? (
                <Loader2 size={18} className='animate-spin' />
              ) : (
                <Send size={18} />
              )}
            </Button>
            <p className='text-sm'>OR</p>
            <Link
              href={
                'https://calendly.com/artistbuildingstudio/30min?month=2024-01'
              }
              aria-label='Book an appointment'
            >
              <Button className='flex items-center justify-center text-sm'>
                Book An Appointment
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
