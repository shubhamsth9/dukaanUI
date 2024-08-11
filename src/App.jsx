import RevenueCard from "./components/RevenueCard";


function App() {

  return (
    <div>
      <div className="grid grid-cols-4">

        <RevenueCard title={"Amount pending"} amount={"5000"} orderCount={"13"}/>
      </div>
    </div>
  )
}

export default App;