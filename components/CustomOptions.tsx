

import { useTranslations } from 'next-intl';
import React from 'react'

export default async function CustomOptions() {
    const t = await useTranslations('HomePage');

    return (
        <>
            <option value="en">
                {t('english')}
            </option>
            <option value="th">
                {t('thai')}
            </option>
        </>
    )
}
