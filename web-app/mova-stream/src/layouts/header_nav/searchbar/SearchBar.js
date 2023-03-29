import styles from './SearchBar.module.scss'
import classNames from 'classnames/bind'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useRef, useState } from 'react'
import { useSearchBarState } from '~/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function SearchBar({ index, onClick }) {
  const [searchBarState, setSearchBarState] = useSearchBarState()
  const inputRef = useRef()
  const [showSearch, setShowSearch] = useState(false)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    setShowSearch(index === 2)
  }, [index])

  useEffect(() => {
    if (!showSearch) {
      setSearchText('')
    } else {
      inputRef.current.focus()
    }
  }, [showSearch])

  return (
    <div
      className={cx('default', {
        active: showSearch,
        inactive: !showSearch,
      })}
    >
      <div className={cx('search-input-container')}>
        <input
          ref={inputRef}
          value={searchText}
          type="text"
          placeholder="Search..."
          spellCheck={false}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <div className={cx('search-icon-container')}>
        <ButtonIcon
          className={cx('fa-button')}
          icon={showSearch ? solid('xmark') : solid('magnifying-glass')}
          onClick={() => {
            onClick()
            setSearchBarState({ searchBarActive: !showSearch })
            setShowSearch(!showSearch)
          }}
        />
      </div>
    </div>
  )
}
export default SearchBar
