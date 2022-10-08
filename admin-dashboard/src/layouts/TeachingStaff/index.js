import React, { useEffect, useState } from "react"
import axios from "axios"
const Notices = () => {
  useEffect(() => {
    getEvents()
    return () => {}
  }, [])

  const url = "https://kitcoek.herokuapp.com/api/teachingstaff/"

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, "0")
  var mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
  var yyyy = today.getFullYear()

  today = mm + "-" + dd + "-" + yyyy

  const [fileData, setFileData] = useState()
  const [data, setData] = useState({
    name: "",
    designation: "",
    qualifications: "",
    experience: "",
    email: "",
    mobile: "",
    department: "Computer Science",
    type: "PG",
    imgUrl: "/avatar.png",
  })
  const [news, setNews] = useState([])
  const [staffs, setStaffs] = useState([])

  const getEvents = async () => {
    let res = await axios.get(url)
    console.log(res)
    setNews(res.data)
    setStaffs(res.data)
  }

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("image", fileData)

    fetch(url + "single", {
      method: "POST",
      body: formData,
    })
      .then(async (result) => {
        result = await result.json()
        data.imgUrl = result.url.location
        console.log(result)
        try {
          let res = await axios.post(url, data)
          console.log(res)
          setData({
            name: "",
            designation: "",
            qualifications: "",
            experience: "",
            email: "",
            mobile: "",
            department: "",
            type: "",
          })
          //TODO find a way to clear the input (type = file )
          window.location.reload()
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

  return (
    <section>
      <form class="w-full flex  p-6">
        <div class="flex items-center mb-6 mr-2">
          <div class="w-[270px]">
            <input
              onChange={(e) => {
                setData({ ...data, fileName: e.target.files[0].name })
                fileChangeHandler(e)
              }}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-0  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 px-5"
              id="inline-password"
              type="file"
              placeholder="******************"
            />
          </div>
        </div>
        <div class="flex items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
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
              Designation
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.designation}
              onChange={(e) =>
                setData({ ...data, designation: e.target.value })
              }
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
              Qualifications
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.qualifications}
              onChange={(e) =>
                setData({ ...data, qualifications: e.target.value })
              }
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
      </form>
      <form class="w-full flex  p-6">
        <div class="flex items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Experience
            </label>
          </div>
          <div class="w-[80px]">
            <input
              value={data.experience}
              onChange={(e) => setData({ ...data, experience: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 ml-5 ">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 "
              for="inline-password"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
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
              Mobile
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 ml-5 ">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            Dept.
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[175px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setData({ ...data, department: e.target.value })}
          >
            <option value="Computer Science" selected>
              Computer Science
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Biotech">Biotech</option>
            <option value="Mech.">Mech.</option>
            <option value="Environmental">Environmental</option>
          </select>
        </div>
        <div class="flex items-center mb-6 ml-1 ">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-1"
            for="inline-password"
          >
            Type.
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[75px]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setData({ ...data, type: e.target.value })}
          >
            <option value="PG" selected>
              P.G
            </option>
            <option value="UG">U.G</option>
            <option value="non_teaching">non teaching</option>
          </select>
        </div>
        <div class="flex items-center mb-7  ">
          <button
            className="flex items-center justify-center w-32 h-12 mt-1 ml-5 bg-slate-400"
            onClick={(e) => handleSubmit(e)}
          >
            SAVE
          </button>
        </div>
      </form>

      <div class="flex flex-col border-t-4">
        <div className="flex items-center px-5 py-2 mt-5 mb-5 ml-6 border-2 w-fit ">
          <label htmlFor="" className="mr-4">
            Filter Department
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[175px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              if (e.target.value == "All") {
                setStaffs(news)
              } else {
                setStaffs(() =>
                  news.filter(
                    (element) => element.department === e.target.value
                  )
                )
              }
            }}
          >
            <option value="All" selected>
              ---
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Biotech">Biotech</option>
            <option value="Mech.">Mech.</option>
            <option value="Environmental">Environmental</option>
          </select>
        </div>

        <div class="border-t-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm max-w-[600px] font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Designation
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Qualifications
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Experience
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6  py-4 text-center"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Mobile
                    </th>
                  </tr>
                </thead>
                {staffs.length > 0 &&
                  staffs.map((element, index) => {
                    console.log(element)
                    return (
                      <tr
                        key={element._id}
                        class={`${
                          index % 2 == 0 ? "bg-gray-100" : ""
                        } border-b`}
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {element.name}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {element.designation}
                        </td>
                        <td class="text-sm max-w-[600px] text-gray-900 font-light px-6 py-4">
                          {element.qualifications}
                        </td>
                        <td class="text-sm text-orange-500 font-light px-6 py-4 whitespace-nowrap">
                          {element.experience}
                        </td>
                        <td class="text-sm text-orange-500 font-light px-6 py-4 whitespace-nowrap">
                          {element.type}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {element.email}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {element.mobile}
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
                    )
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notices
