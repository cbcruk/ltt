import { useRef } from 'react'
import { useAtom } from 'jotai'
import { groupAtom, GROUP, GROUP_LABEL } from '../atoms/group'
import { NUMBER, DIAL_NUMBER, writableNumberAtom } from '../atoms/number'

function IndexPage() {
  const formRef = useRef(null)
  const [groupValue, setGroupValue] = useAtom(groupAtom)
  const [numberValue, setNumberValue] = useAtom(writableNumberAtom)

  return (
    <div className="p-4">
      <form ref={formRef}>
        <fieldset>
          <legend>조 선택</legend>
          {GROUP.map((item) => {
            return (
              <label key={item.value}>
                <input
                  type="radio"
                  name="group"
                  value={item.value}
                  checked={item.value === groupValue}
                  onChange={() => setGroupValue(item.value)}
                />
                {item.label}
              </label>
            )
          })}
        </fieldset>
        <fieldset>
          <legend>{GROUP_LABEL[groupValue]}</legend>
          <button
            type="button"
            onClick={() => {
              setNumberValue('RANDOM')
            }}
          >
            자동번호
          </button>
          {NUMBER.map((item, index) => {
            return (
              <label key={item}>
                <input type="hidden" name="numbers" value={item} />
                <select
                  className="dark:bg-gray-900"
                  value={numberValue[groupValue][index] || ''}
                  onChange={(e) => {
                    setNumberValue({
                      [index]: e.target.value,
                    })
                  }}
                >
                  {DIAL_NUMBER.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )
                  })}
                </select>
              </label>
            )
          })}
          <button type="button">선택완료</button>
        </fieldset>
      </form>
    </div>
  )
}

export default IndexPage
