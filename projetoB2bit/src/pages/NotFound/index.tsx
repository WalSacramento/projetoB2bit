import Header from '../../components/Header'

export default function NotFound() {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-backgroundHome flex flex-col items-center h-full pt-24 bg-bgGray">
        <h1>404 - Not Found</h1>
      </div>
    </div>
  )
}
