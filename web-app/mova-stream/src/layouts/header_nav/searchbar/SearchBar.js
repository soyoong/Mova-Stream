import styles from './SearchBar.module.scss'
import classNames from 'classnames/bind'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import SearchBarItem from './searchbar_item/SearchBarItem'
import tmdb from '~/data/tmdb'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function SearchBar({ onClick, index }) {
  const [data, setData] = useState(tmdb.netflixOriginals)
  const [showSearch, setShowSearch] = useState(false)
  const [listSearch, setListSearch] = useState([])

  useEffect(() => {
    setShowSearch(index === 2)
  }, [index])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-bar-icon-wrapper')}>
        <ButtonIcon
          className={cx('fa-button')}
          icon={showSearch ? solid('xmark') : solid('magnifying-glass')}
          onClick={() => {
            onClick()
            setShowSearch(!showSearch)
          }}
          underlineHover
          underlineActive={showSearch}
        />
      </div>
      {showSearch && (
        <div className={cx('search-bar-wrapper')}>
          <div className={cx('bg')} onClick={() => setShowSearch(false)}></div>
          <div className={cx('search-bar-container')}>
            <div className={cx('search-input-container')}>
              <input type="text" placeholder="Search..." spellCheck={false} />
              <div className={cx('search-button')}>
                <ButtonIcon className={cx('fa-button')} icon={solid('magnifying-glass')} />
              </div>
            </div>
            <div className={cx('drop-list-container')}>
              <div className={cx('drop-list')}>
                {/* {listSearch.length > 0 ? (
                listSearch.map((item, index) => {
                  return (
                    <SearchBarItem
                      key={index}
                      avatar={item.backdrop_path}
                      title={item.title}
                      subTitle={item.original_title}
                    />
                  )
                })
              ) : (
                <p>Lorem ipsum dolor</p>
              )} */}
                <SearchBarItem avatar={data[0].backdrop_path} title={data[0].title} subTitle={data[0].original_title} />
                <SearchBarItem avatar={data[1].backdrop_path} title={data[1].title} subTitle={data[1].original_title} />
                <SearchBarItem avatar={data[2].backdrop_path} title={data[2].title} subTitle={data[2].original_title} />
                <SearchBarItem avatar={data[3].backdrop_path} title={data[3].title} subTitle={data[3].original_title} />
                <SearchBarItem avatar={data[4].backdrop_path} title={data[4].title} subTitle={data[4].original_title} />
                <SearchBarItem avatar={data[5].backdrop_path} title={data[5].title} subTitle={data[5].original_title} />
                <SearchBarItem avatar={data[6].backdrop_path} title={data[6].title} subTitle={data[6].original_title} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default SearchBar
