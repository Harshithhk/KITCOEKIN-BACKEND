import BodyLayout from "../components/BodyLayout"
import BasicLayout from "../components/BasicLayout"
import Header from "../components/Header"
import Footer from "../components/Footer"

function SignIn() {
  // const [rememberMe, setRememberMe] = useState(true);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout>
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <BodyLayout />
      <Footer />
    </BasicLayout>
  )
}

export default SignIn
