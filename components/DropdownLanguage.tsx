'use client';

import { useLocale } from 'next-intl'; // , useTranslations
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition, useEffect, useState } from 'react';
// import CustomOptions from './CustomOptions';

export default function DropdownLanguage() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localeActive = useLocale();
    // const t = useTranslations('HomePage');
    const [selectedLocale, setSelectedLocale] = useState(localeActive);

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        setSelectedLocale(nextLocale);
        // router.replace(`/${nextLocale}`);
        // startTransition(() => {

        // });
    };

    return (
        <label className="border-2 rounded">
            <p className="sr-only">Change language</p>
            <select
                value={selectedLocale}
                className="bg-transparent py-2"
                onChange={onSelectChange}
                disabled={isPending}
            >
                {/* <CustomOptions /> */}
                <option value="en">
                    English
                    {/* {t('english')} */}
                </option>
                <option value="th">
                    Thai
                    {/* {t('thai')} */}
                </option>
            </select>
        </label>
    );
}