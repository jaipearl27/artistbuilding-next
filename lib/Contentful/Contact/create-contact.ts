'use server';
import { CONTACT_TYPE_ID, ENVIORNMENT_ID, LOCALE, cmaClient } from '../client';
import { CF_SPACE_ID } from '../cma-config';

export interface ContactUsQueryProps {
  name: string;
  email: string;
  contact: string;
  message: string;
}

export const createContactQuery = async (data: ContactUsQueryProps) => {
  try {
    const { name, email, contact, message } = data;
    if (!name || !email || !contact || !message) {
      throw new Error('Invalid data');
    }

    const createQuery = await cmaClient.entry.create(
      {
        environmentId: ENVIORNMENT_ID,
        spaceId: CF_SPACE_ID,
        contentTypeId: CONTACT_TYPE_ID,
      },
      {
        fields: {
          name: {
            [LOCALE]: name,
          },
          email: {
            [LOCALE]: email,
          },
          contact: {
            [LOCALE]: contact,
          },
          message: {
            [LOCALE]: message,
          },
        },
      }
    );

    if (!createQuery) {
      throw new Error('Failed to create contact query');
    } else {
      return createQuery;
    }
  } catch (error) {
    console.log('[CONTACT-QUERY-ERROR]: ', error);
  }
};
