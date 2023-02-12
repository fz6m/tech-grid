import { ITech } from '@/data/techList'
import { Button, Popover, Select } from 'antd'
import { useRef, useState } from 'react'
import { EI18nCommon } from '@/i18n'
import { data as techData, ITechnology } from '@/data/techData'
import styles from './index.module.scss'
import cx from 'classnames'

export interface ITechItemProps {
  data: ITech
  t: (key: EI18nCommon) => string
}

const options = Object.entries(techData).map(([key, value]) => {
  return {
    n: key,
    ...value,
  }
})

export const TechItem = ({ data, t }: ITechItemProps) => {
  const [selected, setSelected] = useState<ITechnology>()

  const ref = useRef<Element>(null!)

  const clearSelected = () => {
    setSelected(undefined)
  }

  return (
    <>
      <Popover
        destroyTooltipOnHide
        trigger="click"
        content={
          <div className={styles.pop_line}>
            <Select
              className={styles.select}
              placeholder={t(EI18nCommon.select_your_tech)}
              showSearch
              onChange={(value) => {
                const data = options.find((op) => op.n === value)
                setSelected(data)
              }}
              allowClear
              onClear={() => {
                clearSelected()
              }}
            >
              {options.map((item) => {
                const hasIcon = !!item?.i?.length
                return (
                  <Select.Option key={item.n}>
                    <div className={styles.select_item}>
                      <div className={cx(styles.select_icon, 'J_item_icon')}>
                        {hasIcon ? (
                          <img loading="lazy" src={item.i} alt={item.n} />
                        ) : null}
                      </div>
                      <div className={styles.select_info}>
                        <div className={styles.select_info_name}>{item.n}</div>
                        <div
                          className={cx(styles.select_info_desc, 'J_item_desc')}
                        >
                          {item.d}
                        </div>
                      </div>
                    </div>
                  </Select.Option>
                )
              })}
            </Select>
          </div>
        }
        placement="bottom"
      >
        <Button
          className={styles.box}
          type="text"
          key={data.name}
          ref={ref as any}
        >
          <div className={styles.big_icon}>
            {selected?.i?.length ? (
              <img src={selected?.i} alt={selected?.n} />
            ) : selected?.n?.length ? (
              <div className={styles.big_icon_fallback}>{selected.n}</div>
            ) : null}
          </div>
          <div className={styles.name}>{data.name}</div>
        </Button>
      </Popover>
    </>
  )
}
