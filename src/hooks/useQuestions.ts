import axios from 'axios'

export const useQUestions = () => {

    const getQuestions = async (count: number) => {
        const res = await axios.get(`http://localhost:4000/getQuestion?count=${count}`)
        return res.data
    }

    return { getQuestions }

}