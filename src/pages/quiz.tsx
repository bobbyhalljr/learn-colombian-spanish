import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { quizQuestions } from "@/quiz-questions";
import Quiz from "@/components/Quiz";

const QuizPage = () => {
    return (
        <Layout>
            <Heading>Quiz Page</Heading>
            <Quiz questions={quizQuestions} />
        </Layout>
    )
}

export default QuizPage;