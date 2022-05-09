import { Question } from "./Question"

interface QuestionsTypes {
    questions: any[]
}

export const Questions: React.FC<QuestionsTypes> = ({ questions }) => {
    return (
        <div>
            {questions.map((item: any) => (
                <Question key={item.id} q={item} />
            ))}
        </div>
    )
}