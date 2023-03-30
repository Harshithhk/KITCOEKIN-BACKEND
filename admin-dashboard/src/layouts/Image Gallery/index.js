import React, { useEffect, useState } from "react"
import CircleLoader from "react-spinners/ClipLoader"
import axios from "axios"

import { CSSProperties } from "react"
import { BASE_ROUTE } from "../../utils/constants"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
}

const branchPlacement = [
  {
    Branch: "Biotechnology Engineering",
    Y1920: 16,
    Y2021: 34,
    Y2122: 3,
  },
  {
    Branch: "Civil Engineering",
    Y1920: 10,
    Y2021: 12,
    Y2122: 10,
  },
  {
    Branch: "Computer Science & Engineering",
    Y1920: 69,
    Y2021: 72,
    Y2122: 207,
  },
  {
    Branch: "Electronics & Telecommunication",
    Y1920: 24,
    Y2021: 52,
    Y2122: 89,
  },
  {
    Branch: "Electronics Engineering",
    Y1920: 26,
    Y2021: 50,
    Y2122: 63,
  },
  {
    Branch: "Environmental Engineering",
    Y1920: 6,
    Y2021: 26,
    Y2122: 13,
  },
  {
    Branch: "Information Technology",
    Y1920: 53,
    Y2021: 73,
    Y2122: "-",
  },
  {
    Branch: "Mechanical Engineering",
    Y1920: 39,
    Y2021: 83,
    Y2122: 118,
  },
  {
    Branch: "Production Engineering",
    Y1920: 10,
    Y2021: 30,
    Y2122: "-",
  },
]

const KITGallery = () => {
  useEffect(() => {
    getEvents()
    return () => {}
  }, [])

  const uploadUrl = `${BASE_ROUTE}/api/department/imagegallery/singleimage`
  const imageDataUrl = `${BASE_ROUTE}/api/department/imagegallery`
  const deleteImageUrl = `${BASE_ROUTE}/api/department/imagegallery`

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
    const imageGalleryResponse = await axios.get(imageDataUrl)
    console.log(imageGalleryResponse.data)
    setNews(imageGalleryResponse.data)
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

    fetch(uploadUrl, {
      // fetch("http://ec2-13-235-33-19.ap-south-1.compute.amazonaws.com:8000:8080/api/events/single", {
      method: "POST",
      body: formData,
    })
      .then(async (result) => {
        result = await result.json()
        console.log(data)
        const requestData = {
          fileUrl: result.url.location,
          department: departmentName,
        }

        console.log(requestData)
        try {
          // let res = await axios.post(
          //   "http://ec2-13-235-33-19.ap-south-1.compute.amazonaws.com:8000:8080/api/events/",
          //   data
          // )
          let res = await axios.post(imageDataUrl, requestData)
          // let res = await axios.post("http://ec2-13-235-33-19.ap-south-1.compute.amazonaws.com:8000:8080/api/events/", data)
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
      let res = await axios.delete(deleteImageUrl, {
        data: {
          _id: id,
        },
      })
      window.location.reload()
    } catch (e) {
      alert(e)
      console.log(e)
    }
  }

  const [departmentName, setDepartmentName] = useState("")

  return (
    <section>
      <form class="w-full flex  p-6">
        <div class="flex items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Department
            </label>
          </div>
          <div class="md:w-2/3">
            <select onChange={(event) => setDepartmentName(event.target.value)}>
              <option value="" disbaled hidden>
                -------------
              </option>
              {branchPlacement.map((dep) => (
                <option
                  value={dep.Branch}
                  selected={departmentName === dep.Branch}
                >
                  {dep.Branch}
                </option>
              ))}
            </select>
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
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      File Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Department
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

                      <td class="text-sm text-orange-500 font-light px-6 py-4 whitespace-nowrap">
                        <a href={element.fileUrl}>
                          <img
                            src={element.fileUrl}
                            alt={element.fileUrl}
                            className="h-[100px]"
                          />
                        </a>
                      </td>
                      <td class="text-sm max-w-[600px] text-gray-900 font-light px-6 py-4">
                        {element.department}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {element.createdAt}
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

export default KITGallery
