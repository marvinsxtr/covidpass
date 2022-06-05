import {NextSeo} from 'next-seo';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import Card from '../components/Card';
import Page from '../components/Page';

function Index(): JSX.Element {
    const { t } = useTranslation(['common', 'index', 'errors']);

    const title = 'CovidPass';
    const description = 'Add your EU Digital COVID Certificates to your favorite wallet app.';

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    url: 'https://covidpass.marvinsextro.de/',
                    title: title,
                    description: description,
                    images: [
                        {
                            url: 'https://covidpass.marvinsextro.de/thumbnail.png',
                            width: 1000,
                            height: 500,
                            alt: description,
                        }
                    ],
                    site_name: title,
                }}
                twitter={{
                    handle: '@marvinsxtr',
                    site: '@marvinsxtr',
                    cardType: 'summary_large_image',
                }}
            />
            <Page content={
                <div className="space-y-5">
                    <Card content={
                        <>
                            <p>
                                {t('common:note')}
                                :&nbsp;
                                <a className="underline" href="https://support.apple.com/HT212752">
                                    {t('common:noteLink')}
                                </a>
                            </p>
                        </>
                    }/>
                </div>
            }/>
        </>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'index', 'errors'])),
        },
    };
}

export default Index;
