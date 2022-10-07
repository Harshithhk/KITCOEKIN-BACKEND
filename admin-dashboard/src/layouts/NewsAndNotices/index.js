import "../../App.css"
import axios from "axios"
import { useEffect, useState } from "react"

function NewsAndNotices() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const [news, setNews] = useState([])
  const [notices, setNotices] = useState([])

  const inputNews = {
    title: "Secondy Dummy text for printing & typesetting industry 2",
    duration: [
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    ],
    date: "12 April 2022",
    body: "",
    shortDescription: "",
    featured: false,
    images: [],
    link: "",
  }
  let inputNotice = {
    title: "Secondy Dummy text for printing & typesetting industry 2",
    duration: [
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    ],
    date: "12 April 2022",
    body: "",
    shortDescription: "",
    featured: false,
    images: [],
    link: "",
  }

  const [newsData, setNewsData] = useState(() => inputNews)
  const [noticeData, setNoticeData] = useState(() => inputNotice)

  const callsomeapi = async () => {
    let newss = await fetch(
      "https://kitcoek.herokuapp.com/api/newsandnotices/news"
    )
    // let newss = await fetch("https://kitcoek.herokuapp.com/api/newsandnotices/news")
    newss = await newss.json()

    let noticess = await fetch(
      "https://kitcoek.herokuapp.com/api/newsandnotices/notices"
    )
    // let noticess = await fetch(
    //   "https://kitcoek.herokuapp.com/api/newsandnotices/notices"
    // )
    noticess = await noticess.json()

    let updatedNews = newss.map((element) => {
      let date = new Date(element.date)
      let day = date.getDate()
      let year = date.getFullYear()
      let monthName = month[date.getMonth()]
      element.date = `${day} ${monthName} ${year}`
      return element
    })

    let updatedNotices = noticess.map((element) => {
      let date = new Date(element.date)
      let day = date.getDate()
      let year = date.getFullYear()
      let monthName = month[date.getMonth()]
      element.date = `${day} ${monthName} ${year}`

      return element
    })

    setNews(() => updatedNews)
    setNotices(() => updatedNotices)

    console.log({ news, notices })
  }

  const handleSubmit = async (type) => {
    let body = type === "news" ? newsData : noticeData
    try {
      let data
      if (body._id) {
        data = await axios.put(
          `https://kitcoek.herokuapp.com/api/newsandnotices/${type}`,
          body
        )
        // data = await axios.put(
        //   `https://kitcoek.herokuapp.com/api/newsandnotices/${type}`,
        //   body
        // )
      } else {
        data = await axios.post(
          `https://kitcoek.herokuapp.com/api/newsandnotices/${type}`,
          body
        )
        // data = await axios.post(
        //   `https://kitcoek.herokuapp.com/api/newsandnotices/${type}`,
        //   body
        // )
      }
      window.location.reload()
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (type, id) => {
    console.log(type, id)
    try {
      let data = await axios.delete(
        `https://kitcoek.herokuapp.com/api/newsandnotices/${type}`,
        { data: { id: id } }
      )
      // let data = await axios.delete(
      //   `https://kitcoek.herokuapp.com/api/newsandnotices/${type}`,
      //   { data: { id: id } }
      // )
      window.location.reload()
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    callsomeapi()
  }, [])

  return (
    <div>
      <section className="flex pt-6 md:mt-8 md:flex-col ">
        <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px] ">
          {/* TITLE */}
          <div className="flex items-center">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
              NEWS
            </div>
          </div>
          {/* CONTENT */}
          <div className="mt-8 text-left ">
            <div
              key={newsData._id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="10"
              className="cursor-pointer hover:shadow-lg transition-all  flex  h-28 md:h-[95px] mt-6 rounded-2xl  overflow-hidden"
            >
              {/* ----------DATE-------------- */}
              <div className="h-full w-40 bg-[#495AB6] flex flex-col justify-center items-center relative">
                <div className="text-5xl text-white md:text-3xl">
                  {newsData.date.split(` `)[0]}
                </div>
                <div className="text-white md:text-xs">
                  {newsData.date.split(` `)[1]} {newsData.date.split(` `)[2]}
                </div>
              </div>

              <div className="flex flex-col justify-center w-full pl-4 text-black border-4 md:pl-2 rounded-r-2xl">
                <div className="text-lg text-left md:text-sm">
                  {newsData.title}
                </div>
                <div className="text-[13.5px] md:-translate-x-[2px] md:text-[10px] text-[#717171] mt-3 md:mt-1 flex items-center">
                  <div className="object-contain mr-2">
                    <img
                      src="/images/HomePage/Clock.svg"
                      className="object-contain h-full"
                      alt=""
                    />{" "}
                  </div>
                  {newsData.duration[0]} - {newsData.duration[1]}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                for="message"
                className="block mt-8 mb-2 text-sm font-medium text-left text-gray-900"
              >
                Title
              </label>
              <input
                onChange={(e) =>
                  setNewsData({ ...newsData, title: e.target.value })
                }
                value={newsData.title}
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              ></input>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                datepicker
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) =>
                  setNewsData({ ...newsData, date: e.target.value })
                }
                value={newsData.date}
                placeholder="Select date"
              ></input>
            </div>
            <div className="flex">
              <div className="">
                <label
                  for="message"
                  className="block mt-6 mb-2 text-sm font-medium text-left text-gray-900"
                >
                  From Time
                </label>
                <input
                  onChange={(e) => {
                    let duration = newsData.duration
                    duration[0] = e.target.value
                    setNewsData({ ...newsData, duration: duration })
                  }}
                  value={newsData.duration[0]}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></input>
              </div>

              <div className="ml-4">
                <label
                  for="message"
                  className="block mt-6 mb-2 text-sm font-medium text-left text-gray-900"
                >
                  To Time
                </label>
                <input
                  onChange={(e) => {
                    let duration = newsData.duration
                    duration[1] = e.target.value
                    setNewsData({ ...newsData, duration: duration })
                  }}
                  value={newsData.duration[1]}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></input>
              </div>
            </div>

            <label
              for="message"
              className="block mt-8 mb-2 text-sm font-medium text-left text-gray-900 "
            >
              Body (optional)
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Enter body of the news (optional)"
            ></textarea>

            <button
              onClick={() => handleSubmit("news")}
              className="px-4 py-2 mt-4 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white hover:border-transparent"
            >
              Submit
            </button>
          </div>
        </section>
        <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px]">
          <div className="flex items-center">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
              NOTICES
            </div>
          </div>
          <div className="mt-8 text-left">
            <div
              key={noticeData._id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="20"
              className="cursor-pointer hover:shadow-lg transition-all  flex  h-28 md:h-[95px] mt-6 rounded-2xl overflow-hidden"
            >
              <div className="border-4 border-r-2 rounded-l-2xl h-full  w-40 text-[#F07C00]  flex flex-col justify-center items-center">
                <div className="text-5xl md:text-3xl">
                  {noticeData.date.split(` `)[0]}
                </div>
                <div className="text-lg md:text-xs">
                  {" "}
                  {noticeData.date.split(` `)[1]}{" "}
                  {noticeData.date.split(` `)[2]}
                </div>
              </div>
              <div className="flex flex-col justify-center w-full pl-4 text-black border-4 border-l-2 md:pl-2 rounded-r-2xl">
                <div className="text-lg text-left md:text-sm">
                  {noticeData.title}
                </div>
                <div className="text-[13.5px] md:-translate-x-[2px] text-[#717171] md:mt-1 md:text-[10px] mt-3 flex">
                  <div className="object-contain mr-2">
                    <img
                      src="/images/HomePage/Clock.svg"
                      className="object-contain h-full"
                      alt=""
                    />{" "}
                  </div>
                  {noticeData.duration[0]} - {noticeData.duration[1]}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                for="message"
                className="block mt-8 mb-2 text-sm font-medium text-left text-gray-900 "
              >
                Title
              </label>{" "}
              <input
                onChange={(e) =>
                  setNoticeData({ ...noticeData, title: e.target.value })
                }
                value={noticeData.title}
                type="text"
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              ></input>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                onChange={(e) =>
                  setNoticeData({ ...noticeData, date: e.target.value })
                }
                value={noticeData.date}
                datepicker
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Select date"
              />
            </div>
            <div className="flex">
              <div className="">
                <label
                  for="message"
                  className="block mt-6 mb-2 text-sm font-medium text-left text-gray-900"
                >
                  From Time
                </label>
                <input
                  onChange={(e) => {
                    let duration = noticeData.duration
                    duration[0] = e.target.value
                    setNoticeData({ ...noticeData, duration: duration })
                  }}
                  value={noticeData.duration[0]}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></input>
              </div>

              <div className="ml-4">
                <label
                  for="message"
                  className="block mt-6 mb-2 text-sm font-medium text-left text-gray-900"
                >
                  To Time
                </label>
                <input
                  onChange={(e) => {
                    let duration = noticeData.duration
                    duration[1] = e.target.value
                    setNoticeData({ ...noticeData, duration: duration })
                  }}
                  value={noticeData.duration[1]}
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                ></input>
              </div>
            </div>
            <label
              for="message"
              className="block mt-8 mb-2 text-sm font-medium text-left text-gray-900 "
            >
              Body (optional)
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Enter body of the news (optional)"
            ></textarea>

            <button
              onClick={() => handleSubmit("notices")}
              className="px-4 py-2 mt-4 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white hover:border-transparent"
            >
              Submit
            </button>
          </div>
        </section>
      </section>

      {/* PREVIEW */}

      <section className="flex mt-32 md:mt-8 md:flex-col">
        <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px]">
          {/* TITLE */}
          <div className="flex items-center">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
              NEWS
            </div>
          </div>
          {/* CONTENT */}
          <div className="mt-8">
            {news.map((element, index) => (
              <div
                key={element._id}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={`${index * 10}`}
                className="group relative cursor-pointer hover:shadow-lg transition-all  flex  h-28 md:h-[95px] mt-6 rounded-2xl  overflow-hidden"
              >
                <div
                  className="absolute hidden font-bold group-hover:block text right-3 top-2"
                  onClick={() => handleDelete("news", element._id)}
                >
                  X
                </div>
                <div
                  className="absolute hidden font-bold group-hover:block hover:font-normal text right-3 bottom-2"
                  onClick={() => setNewsData(element)}
                >
                  Edit
                </div>
                <div className="h-full w-40 bg-[#495AB6] flex flex-col justify-center items-center">
                  <div className="text-5xl text-white md:text-3xl">
                    {element.date.split(` `)[0]}
                  </div>
                  <div className="text-lg text-white md:text-xs">
                    {element.date.split(` `)[1]} {element.date.split(` `)[2]}
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full pl-4 text-black border-4 md:pl-2 rounded-r-2xl">
                  <div className="text-lg text-left md:text-sm">
                    {element.title}
                  </div>
                  <div className="text-[13.5px] md:-translate-x-[2px] md:text-[10px] text-[#717171] mt-3 md:mt-1 flex items-center">
                    <div className="object-contain mr-2">
                      <img
                        src="/images/HomePage/Clock.svg"
                        className="object-contain h-full"
                        alt=""
                      />{" "}
                    </div>
                    {element.duration[0]} - {element.duration[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px]">
          <div className="flex items-center">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
              NOTICES
            </div>
          </div>
          <div className="mt-8">
            {notices.map((notice, index) => (
              <div
                key={notice._id}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={`${index * 20}`}
                className="group relative cursor-pointer hover:shadow-lg transition-all  flex  h-28 md:h-[95px] mt-6 rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute hidden font-bold group-hover:block text right-3 top-2"
                  onClick={() => handleDelete("notices", notice._id)}
                >
                  X
                </div>
                <div
                  className="absolute hidden font-bold group-hover:block hover:font-normal text right-3 bottom-2"
                  onClick={() => setNoticeData(notice)}
                >
                  Edit
                </div>
                <div className="border-4 border-r-2 rounded-l-2xl h-full  w-40 text-[#F07C00]  flex flex-col justify-center items-center">
                  <div className="text-5xl md:text-3xl">
                    {notice.date.split(` `)[0]}
                  </div>
                  <div className="text-lg md:text-xs">
                    {" "}
                    {notice.date.split(` `)[1]} {notice.date.split(` `)[2]}
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full pl-4 text-black border-4 border-l-2 md:pl-2 rounded-r-2xl">
                  <div className="text-lg text-left md:text-sm">
                    {notice.title}
                  </div>
                  <div className="text-[13.5px] md:-translate-x-[2px] text-[#717171] md:mt-1 md:text-[10px] mt-3 flex">
                    <div className="object-contain mr-2">
                      <img
                        src="/images/HomePage/Clock.svg"
                        className="object-contain h-full"
                        alt=""
                      />{" "}
                    </div>
                    {notice.duration[0]} - {notice.duration[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export default NewsAndNotices
