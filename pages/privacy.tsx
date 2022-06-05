import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import Page from '../components/Page'
import Card from '../components/Card'

function Privacy(): JSX.Element {
    const { t } = useTranslation(['common', 'index', 'privacy']);
    return (
        <Page content={
            <Card step="i" heading={t('common:privacyPolicy')} content={
                <div className="space-y-3">
                    <p>{t('privacy:gdprNotice')}</p>
                    <p className="font-bold">{t('privacy:contact')}</p>
                    <p>
                        Marvin Sextro
                        <br/>
                        {t('privacy:email')}:
                        &nbsp;
                        <a href="mailto:covidpass@marvinsextro.de" className="underline">covidpass@marvinsextro.de</a>
                        <br/>
                        {t('privacy:website')}:
                        &nbsp;
                        <a href="https://marvinsextro.de" className="underline">https://marvinsextro.de</a>
                    </p>
                    <p>{t('privacy:logFiles')}:</p>
                    <div className="pl-6">
                        <ul className="list-disc">
                            <li>{t('privacy:logFilesBrowser')}</li>
                            <li>{t('privacy:logFilesOs')}</li>
                            <li>{t('privacy:logFilesReferrer')}</li>
                            <li>{t('privacy:logFilesTime')}</li>
                            <li>{t('privacy:logFilesIpAddress')}</li>
                        </ul>
                    </div>
                    <p className="font-bold">{t('privacy:thirdParties')}</p>
                    <div className="pl-6">
                        <ul className="list-disc">
                            <li>
                                GitHub:
                                &nbsp;
                                <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" className="underline">
                                    {t('common:privacyPolicy')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            }/>
        }/>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['index', 'privacy', 'common'])),
        },
    };
}

export default Privacy;