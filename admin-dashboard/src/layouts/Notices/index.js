import React, { useState } from "react"

const Notices = () => {
  const [data, setData] = useState({
    id: 0,
    news: "",
    file: "",
    date: "10-07-2022",
  })
  const [news, setNews] = useState([
    {
      id: 1,
      news: "Exams declared",
      file: "Results.pdf",
      date: "10-07-2022",
    },
    {
      id: 2,
      news: "Paper Seeing Scheduled",
      file: "Results.pdf",
      date: "10-07-2022",
    },
    { id: 3, news: "Exams declared", file: "Results.pdf", date: "10-07-2022" },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    let newId = news[news.length - 1].id + 1
    let newNews = data
    newNews.id = newId
    let newsArr = news
    newsArr.push(data)
    setNews(newsArr)
  }

  return (
    <section>
      <form class="w-full flex  p-6">
        <div class="flex items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Title
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.news}
              onChange={(e) => setData({ ...data, news: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 ml-5">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              File
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              onChange={(e) =>
                setData({ ...data, file: e.target.files[0].name })
              }
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 px-5"
              id="inline-password"
              type="file"
              placeholder="******************"
            />
          </div>
        </div>
        <button
          className="flex items-center justify-center w-40 h-12 mt-1 ml-5 bg-slate-400"
          onClick={(e) => handleSubmit(e)}
        >
          SAVE
        </button>
      </form>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      News
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      File Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                {news.map((element, index) => (
                  <tr class={`${index % 2 == 0 ? "bg-gray-100" : ""} border-b`}>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {element.id}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {element.news}
                    </td>
                    <td class="text-sm text-orange-500 font-light px-6 py-4 whitespace-nowrap">
                      {element.file}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {element.date}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notices
