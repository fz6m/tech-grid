import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetServerSideProps } from 'next'
import { EI18nCommon, EI18nLang, EI18nNs, i18n } from '@/i18n'
import { Card, Typography, Button, Modal, message, Spin } from 'antd'
import { useRouter } from 'next/router'
import styles from '../styles/index.module.scss'
import { ITech, TECH_LIST } from '@/data/techList'
import { TechItem } from '@/components/TechItem'
import cx from 'classnames'
import { toJpeg } from 'html-to-image'
import { useEffect, useRef, useState } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import { flushSync } from 'react-dom'
import { SeoHead } from '@/components/SEO'
import { createBreakpoint } from 'react-use'

interface IProps {}

// TODO: support mobile
const useBreakpoint = createBreakpoint({ S: 768, SM: 0 })

export default function Page() {
  const { t } = useTranslation(EI18nNs.common)
  const ref = useRef<HTMLDivElement>(null!)
  const [pageSpin, setPageSpin] = useState(false)

  const router = useRouter()
  const getNextLocale = () => {
    return router.locale === EI18nLang.en ? EI18nLang.zh : EI18nLang.en
  }
  const onToggleLanguageClick = () => {
    flushSync(() => {
      setPageSpin(true)
      message.info(t(EI18nCommon.switching))
    })
    const newLocale = getNextLocale()
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
    setPageSpin(false)
  }

  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [result, setResult] = useState('')
  const generateImg = async () => {
    const elm = ref.current
    if (!elm) {
      return
    }
    const result = await toJpeg(elm, {
      quality: 0.95,
    })
    if (result?.length) {
      setResult(result)
      setModalVisible(true)
    }
  }

  const closeModal = () => {
    setModalVisible(false)
  }
  
  const [isMobile, setIsMobile] = useState(false)
  const breakpoint = useBreakpoint()

  useEffect(() => {
    if (breakpoint === 'SM') {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [breakpoint])

  return (
    <>
      {isMobile && <div className={styles.mobile}>{t(EI18nCommon.mobile)}</div>}
      <Spin spinning={pageSpin}>
        <div className={styles.box}>
          <Card className={styles.core} ref={ref}>
            <div className={styles.card_content}>
              <Typography.Title level={2} className={cx(styles.title)}>
                {t(EI18nCommon.title)}
              </Typography.Title>
              <div className={styles.tech_box}>
                {TECH_LIST.map((item) => {
                  return {
                    ...item,
                    name: t(item.name),
                  } as ITech
                }).map((item) => {
                  return <TechItem t={t} data={item} key={item.name} />
                })}
              </div>
            </div>
          </Card>
          <div className={styles.btns}>
            <Button
              size="large"
              type="primary"
              onClick={async () => {
                try {
                  setLoading(true)
                  await generateImg()
                } finally {
                  setLoading(false)
                }
              }}
              loading={loading}
            >
              {t(EI18nCommon.generate)}
            </Button>
          </div>
          <div className={styles.footer}>
            <div className={styles.footer_url}>
              <Button
                icon={<GithubOutlined />}
                type="text"
                size="large"
                shape="circle"
                href={'https://github.com/fz6m/tech-grid'}
                target="_blank noreferrer noopener"
              />
            </div>
            <div className={styles.footer_from}>{t(EI18nCommon.data_from)}</div>
            <Button
              size="small"
              type="link"
              href="https://github.com/wappalyzer/wappalyzer"
              target="_blank noreferrer noopener"
            >
              wappalyzer
            </Button>
          </div>
          <div className={styles.box_locale}>
            <Button onClick={() => onToggleLanguageClick()}>
              {t(EI18nCommon.locale)}
            </Button>
          </div>
          <Modal
            open={modalVisible}
            onCancel={() => {
              closeModal()
            }}
            title={`${t(EI18nCommon.generate)} (${t(EI18nCommon.save)})`}
            cancelButtonProps={{
              style: {
                display: 'none',
              },
            }}
            width={'70vw'}
            okText={t(EI18nCommon.close)}
            onOk={() => {
              closeModal()
            }}
          >
            <div className={styles.result}>
              <img src={result} alt="image-result" />
            </div>
          </Modal>
        </div>
      </Spin>

      <SeoHead
        title={t(EI18nCommon.title) as string}
        description={t(EI18nCommon.description) as string}
        author={t(EI18nCommon.author) as string}
        keywords={t(EI18nCommon.keywords) as string}
        permalink={t(EI18nCommon.permalink) as string}
        ogImage={{
          url: t(EI18nCommon.ogImage) as string,
          width: Number(t(EI18nCommon.ogWidth)) as number,
          height: Number(t(EI18nCommon.ogHeight)) as number,
        }}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? i18n.defaultLocale, [
      EI18nNs.common,
    ])),
  },
})
