import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./components/Card"
import Header from "./components/Header"
import { aEndpoints } from "./EndpointsData"
import { formatDate } from "./helpers/formatters"
import "./App.css"

const renderCard = endpoint => {
  return (
    <Card
      key={endpoint.name}
      endpoint={endpoint.name}
      success={endpoint.success}
      hostname={endpoint.hostname}
      time={endpoint.time}
    />
  )
}

const App = () => {
  const [aCardsData, setCardsData] = useState([])
  const iFetchInterval = 15000 // here you can change the time between fetchs (ms)

  useEffect(() => {
    fetchData()
    setInterval(async () => {
      fetchData()
    }, iFetchInterval)
  }, [])

  const fetchData = () => {
    const aEndpointsResponses = []
    const aAxiosRequests = aEndpoints.map(endpoint => {
      return axios.get(endpoint.url, { params: { name: endpoint.name } })
    })

    Promise.allSettled(aAxiosRequests).then(results => {
      results.forEach(result => {
        aEndpointsResponses.push({
          //prettier-ignore
          name: result.status === "fulfilled" ? result.value.config.params.name : result.reason.config.params.name,
          success: result.status === "fulfilled" ? true : false,
          hostname: result.value?.data.hostname,
          time: result.value ? formatDate(result.value.data.time) : "-",
        })
      })
      setCardsData(aEndpointsResponses)
    })
  }

  return (
    <>
      <Header />
      <div className="cards-container">
        {aCardsData.map(endpoint => renderCard(endpoint))}
      </div>
    </>
  )
}

export default App
