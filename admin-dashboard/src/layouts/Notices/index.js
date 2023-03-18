import React, { useEffect, useState } from "react"
import CircleLoader from "react-spinners/ClipLoader"
import axios from "axios"

import { CSSProperties } from "react"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
}

const Notices = () => {
  useEffect(() => {
    getEvents()
    console.log("++++++++++++++++++++++++>" + process.env.MODE)
    return () => {}
  }, [])

  const url = "http://localhost:8080/api/events/"

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, "0")
  var mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
  var yyyy = today.getFullYear()

  today = mm + "-" + dd + "-" + yyyy

  let [loading, setLoading] = useState(false)
  let [color, setColor] = useState("#ffffff")

  const [fileData, setFileData] = useState()
  const [data, setData] = useState({
    _id: 0,
    title: "",
    fileName: "",
    date: today,
  })
  const [news, setNews] = useState([])

  const getEvents = async () => {
    let res = await axios.get(url)
    // let res = await axios.get("http://localhost:8080/api/events/")
    console.log(res)
    setNews(res.data)
  }

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) {
      return
    }
    setLoading(true)

    const formData = new FormData()

    formData.append("image", fileData)

    fetch(url + "single", {
      // fetch("http://localhost:8080/api/events/single", {
      method: "POST",
      body: formData,
    })
      .then(async (result) => {
        result = await result.json()
        console.log(data)
        data.fileUrl = result.url.location
        console.log(result)
        try {
          // let res = await axios.post(
          //   "http://localhost:8080/api/events/",
          //   data
          // )
          let res = await axios.post(url, data)
          // let res = await axios.post("http://localhost:8080/api/events/", data)
          console.log(res)
          setData({
            _id: 0,
            title: "",
            fileName: "",
            date: today,
          })
          //TODO find a way to clear the input (type = file )
          // window.location.reload()
          // getEvents()
        } catch (err) {
          console.log(err)
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const actionDelete = async (id) => {
    try {
      let res = await axios.delete(url, {
        // let res = await axios.delete("https://kitcoek.herokuapp.com//api/events/", {
        data: {
          _id: id,
        },
      })
      // let res = await axios.delete("http://localhost:8080/api/events/", {
      //   data: {
      //     _id: id,
      //   },
      // })
      window.location.reload()
    } catch (e) {
      alert(e)
      console.log(e)
    }
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
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 ml-5 ">
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
              onChange={(e) => {
                setData({ ...data, fileName: e.target.files[0].name })
                fileChangeHandler(e)
              }}
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
          {loading ? (
            <CircleLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "SAVE"
          )}
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
                      class="text-sm max-w-[600px] font-medium text-gray-900 px-6 py-4 text-center"
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
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {news.length > 0 &&
                  news.map((element, index) => (
                    <tr
                      key={element._id}
                      class={`${index % 2 == 0 ? "bg-gray-100" : ""} border-b`}
                    >
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index}
                      </td>
                      <td class="text-sm max-w-[600px] text-gray-900 font-light px-6 py-4">
                        {element.title}
                      </td>
                      <td class="text-sm text-orange-500 font-light px-6 py-4 whitespace-nowrap">
                        <a href={element.fileUrl}>{element.fileName}</a>
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {element.date}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => actionDelete(element._id)}
                          className="px-3 py-2 text-white bg-slate-600"
                        >
                          Delete
                        </button>
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
