import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  firstname: z.string().min(1, 'Le prénom est requis'),
  lastname: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit faire au moins 10 caractères'),
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
  const EMAILJS_SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const sendEmail = (data: FormData) => {
    setIsSending(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      )
      .then(
        () => {
          toast.success('Message envoyé avec succès !');
          reset();
        },
        () => {
          toast.error("Une erreur est survenue lors de l'envoi.");
        },
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section className="max-w-xl mx-auto p-6 mt-96 mb-24" id="contact-form">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(sendEmail)}
      >
        <div className="flex w-full justify-center gap-6">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="firstname" className="text-sm mb-1">
              Prénom
            </label>
            <input
              id="firstname"
              type="text"
              placeholder="Jordan"
              className="rounded-md bg-transparent border border-white/20 px-4 py-2 focus:outline-none focus:border-primary"
              {...register('firstname')}
            />
            {errors.firstname && (
              <span className="text-red-500 text-xs mt-1">
                {errors.firstname.message}
              </span>
            )}
          </div>

          <div className="flex flex-col w-[48%]">
            <label htmlFor="lastname" className="text-sm mb-1">
              Nom
            </label>
            <input
              id="lastname"
              type="text"
              placeholder="Bardu"
              className="rounded-md bg-transparent border border-white/20 px-4 py-2 focus:outline-none focus:border-primary"
              {...register('lastname')}
            />
            {errors.lastname && (
              <span className="text-red-500 text-xs mt-1">
                {errors.lastname.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col w-full justify-center">
          <label htmlFor="email" className="text-sm mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@exemple.com"
            className="rounded-md bg-transparent border border-white/20 px-4 py-2 focus:outline-none focus:border-primary"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full justify-center">
          <label htmlFor="message" className="text-sm mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Votre message..."
            className="rounded-md bg-transparent border border-white/20 px-4 py-2 resize-none focus:outline-none focus:border-primary"
            {...register('message')}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 self-start px-6 py-2 rounded-md bg-primary text-white font-medium hover:bg-secondary transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSending}
        >
          {isSending ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
