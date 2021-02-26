import { NekoInput, NekoButton } from 'nekohack-ui'
import { useRecoilState } from 'recoil'
import { valueState, countState } from '../store'

const TodoItem = () => {
    const [value, setValue] = useRecoilState(valueState)
    const [count, setCount] = useRecoilState(countState)
    return (
        <section>
            <div>
                <NekoInput
                    value={value}
                    onChange={(v: string) => setValue(v)}
                />
            </div>
            <div>
                <NekoButton onClick={() => setCount((c: number) => c + 1)}>
                    count is: {count}
                </NekoButton>
            </div>
        </section>
    )
}

export default TodoItem
