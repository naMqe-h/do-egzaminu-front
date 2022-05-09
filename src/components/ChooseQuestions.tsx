import { Dispatch, SetStateAction, useState } from "react"
import { useQUestions } from "../hooks/useQuestions"

interface ChooseQuestionsTypes {
    setReady: Dispatch<SetStateAction<boolean>>
    setQuestions: Dispatch<SetStateAction<any[]>>
}

export const ChooseQuestions: React.FC<ChooseQuestionsTypes> = ({ setReady, setQuestions }) => {
    const [count, setCount] = useState(0)
    const { getQuestions } = useQUestions()

    const handleStart = async () => {
        const questions = await getQuestions(count)
        setQuestions(questions)
        setReady(true)
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-10">
            <h1 className="text-2xl text-white font-bold">Ile pytań?</h1>
            <input type="number" value={count} onChange={(e) => setCount(+e.currentTarget.value)} className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-secondary px-10" onClick={handleStart}>Start</button>
        </div>
    )
}