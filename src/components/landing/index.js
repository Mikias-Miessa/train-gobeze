import Courses from "./Courses"
import Footer from "./Footer"
import Header from "./Header"
import Hero from './Hero'
const LandingPage = () =>{

    return (<>
        <Header />
        <main>
<Hero />
        <Courses />
        </main>
        <Footer />
    </>
    );
}

export default LandingPage;