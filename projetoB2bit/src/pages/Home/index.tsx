import Header from '../../components/Header'
import ProfileInfo from '../../components/ProfileInfo'

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-backgroundHome flex flex-col items-center h-full pt-24 bg-bgGray">
        <ProfileInfo />
      </div>
    </div>
  )
}
