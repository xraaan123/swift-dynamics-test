import { Card } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";

// { language }: { language: string }

const CustomCard = () => {
    const t = useTranslations('HomePage');

    //{t('cardTitle1')}
    // {t('cardContent1')}
    // {t('cardTitle2')}
    // {t('cardContent2')} ${language}

    return (
        <div className="w-full flex flex-row justify-center items-center gap-10 ">
            <Link href={`/en/layout-style`}>
                <Card title={t('cardTitle1')} style={{ width: 300 }}>
                    {t('cardContent1')}
                </Card>
            </Link>

            <Link href={`/en/form`}>
                <Card title={t('cardTitle2')} style={{ width: 300 }}>
                    {t('cardContent2')}
                </Card>
            </Link>
        </div>
    )
}

export default CustomCard