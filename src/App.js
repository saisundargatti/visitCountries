import {Component} from 'react'
import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  initialVisitedList = initialCountriesList.filter(
    eachItem => eachItem.isVisited === true,
  )

  state = {visitedCountriesList: this.initialVisitedList}

  onClickEventHandler = event => {
    const {visitedCountriesList} = this.state
    const returnedObject = initialCountriesList.find(
      eachItem => eachItem.id === event.target.value,
    )
    const index = initialCountriesList.findIndex(
      eachItem => eachItem.id === event.target.value,
    )
    initialCountriesList[index].isVisited = true
    const visitedObj = {...returnedObject, isVisited: true}
    this.setState({
      visitedCountriesList: [...visitedCountriesList, visitedObj],
    })
  }

  deleteHandler = event => {
    const {visitedCountriesList} = this.state
    const updatedVisitedCountriesList = visitedCountriesList.filter(
      eachItem => eachItem.id !== event.target.value,
    )

    const index = initialCountriesList.findIndex(
      eachItem => eachItem.id === event.target.value,
    )
    initialCountriesList[index].isVisited = false

    this.setState({
      visitedCountriesList: updatedVisitedCountriesList,
    })
  }

  render() {
    const {visitedCountriesList} = this.state

    return (
      <div className="bg-container pt-2 px-5">
        <h1 className="text-white h4 pt-3">Countries</h1>
        <ul className="list-group ul-class">
          {initialCountriesList.map(eachItem => (
            <li
              key={eachItem.id}
              className="list-group-item d-flex flex-row justify-content-between list-class"
            >
              <p className="text-white">{eachItem.name}</p>
              {!eachItem.isVisited && (
                <button
                  type="button"
                  className="btn btn-primary"
                  value={eachItem.id}
                  onClick={this.onClickEventHandler}
                >
                  Visit
                </button>
              )}
              {eachItem.isVisited && <p className="text-white">Visited</p>}
            </li>
          ))}
        </ul>
        <h1 className="text-white h4 pt-3">Visited Countries</h1>
        <ul className="list-group d-flex flex-row countries-class">
          {visitedCountriesList.map(eachItem => (
            <li className="list-group-item m-3" key={eachItem.id}>
              <img
                src={eachItem.imageUrl}
                alt="thumbnail"
                className="image-class"
              />
              <div className="d-flex flex-row justify-content-between align-items-center p-2">
                <p className="pt-3">{eachItem.name}</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  value={eachItem.id}
                  onClick={this.deleteHandler}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        {visitedCountriesList.length === 0 && (
          <p className="display-6 text-white text-center">
            No Countries Visited Yet
          </p>
        )}
      </div>
    )
  }
}

export default App
