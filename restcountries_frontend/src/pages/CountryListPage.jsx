import SearchBar from '../components/SearchBar'
import RegionFilter from '../components/RegionFilter'
import CountryList from '../components/CountryList'
import CountryCardSkeleton from '../components/CountryCardSkeleton'
import { useState } from 'react'

const CountryListPage = ({ countryData, isLoading }) => {
  const [query, setQuery] = useState('')
  const [regionName, setRegionName] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const skeletonCards =
    isLoading &&
    [...Array(250)].map((card, index) => {
      return <CountryCardSkeleton key={index} />
    })

  const countriesToRender = isLoading
    ? skeletonCards
    : countryData.filter((data) => {
        const searchResults = data.name.toLowerCase().includes(query.toLowerCase())
        const hasFiltered = regionName === null || regionName === data.region || regionName === 'All Countries'

        return searchResults && hasFiltered
      })

  const itemsPerPage = 10
  const totalpages = Math.ceil(countriesToRender.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage

  const paginationData = countriesToRender.slice(startIndex, startIndex + itemsPerPage)

  return (
    <main className="mx-5 mb-10">
      <div className="flex flex-col gap-y-10 sm:flex-row sm:justify-between mb-4">
        <SearchBar setQuery={setQuery} query={query} />
        <RegionFilter regionName={regionName} setRegionName={setRegionName} countryData={countryData} isLoading={isLoading} />
      </div>
      <CountryList countriesToRender={paginationData} setQuery={setQuery} setRegionName={setRegionName} isLoading={isLoading} />
      <div className="text-text flex justify-center items-center gap-8 font-semibold mt-4">
        <button
          className="dark:bg-gray-900 dark:text-white flex gap-x-2 items-center rounded-md shadow-md px-6 py-2 w-max cursor-pointer"
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className=" dark:text-white">
          Page {currentPage} of {totalpages}
        </span>
        <button
          className="dark:bg-gray-900 dark:text-white flex gap-x-2 items-center rounded-md shadow-md px-6 py-2 w-max cursor-pointer"
          type="button"
          disabled={currentPage === totalpages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default CountryListPage
