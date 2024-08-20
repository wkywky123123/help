import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || '404'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>404</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
               啊哦，你要找的页面不存在了~
              </p>
            )
          )}

          <img
            src='/404.png'
            alt='404找不到页面'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
