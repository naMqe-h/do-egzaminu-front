import { useEffect, useState } from "react"

interface QuestionTypes {
    q: {
        id: number
        odp1: string
        odp2: string
        odp3: string
        odp4: string
        poprawna: number
        pytanie: string
        otwarte: string
    }
}

export const Question: React.FC<QuestionTypes> = ({ q }) => {
    const [openText, setOpenText] = useState<string>('')
    const [openResult, setOpenResult] = useState<string>('')
    const [hide, setHide] = useState<boolean>(true)
    const [answerGreen, setAnswerGreen] = useState<number>(0)
    const [answerRed, setAnswerRed] = useState<number>(0)

    const handleOpen = () => {
        if(openText === q.otwarte) {
            setOpenResult('input-success')
        } else {
            setOpenResult('input-error')
        }
        setHide(false)
    }

    const checkAnswer = (nr: number) => {
        if(nr === q.poprawna) {
            setAnswerGreen(nr)
            setAnswerRed(0)
        } else {
            setAnswerGreen(q.poprawna)
            setAnswerRed(nr)
        }
    }

    return (
        <div className="m-6 p-6 flex flex-col justify-center items-center">
            <h1 className="text-xl text-white font-bold mb-6" dangerouslySetInnerHTML={{ __html: q.pytanie}}></h1>
            {q.otwarte.length > 0 ? (
                <div>
                    <div className="flex gap-6">
                        <input 
                            type="text" 
                            placeholder="Wpisz odpowiedź" 
                            value={openText} 
                            onChange={e => setOpenText(e.currentTarget.value)} 
                            className={`input ${openResult} input-bordered w-96`} />
                        <button className="btn btn-primary" onClick={handleOpen}>Sprawdź</button>
                    </div>
                    <p>{!hide && q.otwarte}</p>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    <button className={`btn btn-outline ${answerGreen === 1 && 'btn-success'} ${answerRed === 1 && 'btn-error'}`} onClick={() => checkAnswer(1)} dangerouslySetInnerHTML={{ __html: q.odp1}}></button>
                    <button className={`btn btn-outline ${answerGreen === 2 && 'btn-success'} ${answerRed === 2 && 'btn-error'}`} onClick={() => checkAnswer(2)} dangerouslySetInnerHTML={{ __html: q.odp2}}></button>
                    <button className={`btn btn-outline ${answerGreen === 3 && 'btn-success'} ${answerRed === 3 && 'btn-error'}`} onClick={() => checkAnswer(3)} dangerouslySetInnerHTML={{ __html: q.odp3}}></button>
                    <button className={`btn btn-outline ${answerGreen === 4 && 'btn-success'} ${answerRed === 4 && 'btn-error'}`} onClick={() => checkAnswer(4)} dangerouslySetInnerHTML={{ __html: q.odp4}}></button>
                </div>
            )}
            <div className="divider"></div>
        </div>
    )
}