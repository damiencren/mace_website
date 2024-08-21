import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['mace.enzo35@gmail.com'],
        subject: 'Nouveau Message provenant de votre site',
        react: EmailTemplate({ firstName: name, email : email, message: message }),
    });

    if (error) {
    return res.status(400).json(error);
    }

    res.status(200).json(data);
};
