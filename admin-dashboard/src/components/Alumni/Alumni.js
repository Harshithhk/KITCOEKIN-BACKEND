import React, { useEffect, useState } from "react"
import CircleLoader from "react-spinners/ClipLoader"
import axios from "axios"
import { branchPlacement } from "../../utils/constants"

import { CSSProperties } from "react"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
}


const INITIAL_STATE = {
    firstName: "", 
    lastName: "", 
    email: "", 
    phoneNumber: "", 
    prn: "", 
    city: "", 
    latitude: "", 
    longitude: "", 
    yearOfGraduation: "",
    department: "", 
    active: true, 
    image: "", 
    fileName: ""
}

const Alumni = () => {
  const  [loading, setLoading] = useState(false)
  useEffect(() => {
    if(!loading){
    getAlumni()
    }
    return () => {}
  }, [loading])

  const url = "http://localhost:5000/api/alumni/"

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, "0")
  var mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
  var yyyy = today.getFullYear()

  today = mm + "-" + dd + "-" + yyyy

 
  let [color, setColor] = useState("#ffffff")

  const [fileData, setFileData] = useState()
  const [data, setData] = useState({
    INITIAL_STATE

  })
  const [alumni, setAlumni] = useState([])

  const getAlumni = async () => {
    let res = await axios.get(url)
    setAlumni(res.data)
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
    let formData;

    if(fileData){
      formData = new FormData()
      formData.append("image", fileData)
    }

    try{
      let resultJson;
      if(formData){
         const result = await fetch(url + "alumniimage/", {
          method: "POST",
          body: formData,
        })
        resultJson = await result.json()
      }

         
        console.log(data)
        if(resultJson){
          console.log(resultJson)
          data.image = resultJson.url.location
        }
        try {
          
          let res = await axios.post(url, data)
          console.log(res)
          setData({
            ...INITIAL_STATE
          })
          //TODO find a way to clear the input (type = file )
          // window.location.reload()
          // getEvents()
        } catch (err) {
          console.log(err)
        }
      
    }
      catch (err){
        alert(err.message)
      }
    setLoading(false)
  }

  const actionDelete = async (id) => {
    try {
      let res = await axios.delete(url, {
        // let res = await axios.delete("https://kitcoek.herokuapp.com//api/events/", {
        data: {
          _id: id,
        },
      })
      // let res = await axios.delete("http://localhost:5000/api/events/", {
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


  const Label = (props) => <label {...props} className={`block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 fixed-label ${props.className} `} /> 

  return (
    <section>
      <style jsx>{`
      .fixed-label {
        min-width: 160px; 
      }
      `}</style>
      <form class="w-full flex flex-wrap justify-between p-6">
        <div class="flex items-center flex-wrap mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="first-name"
            >
              First Name
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="first-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center mb-6  xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="last-name"
            >
              Last Name
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="last-name"
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center mb-6">
          <div class="md:w-1/3">
            <Label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="department"
            >
              Department
            </Label>
          </div>
          <div class="md:w-2/3">
          <select onChange={(event) => setData({...data, department: event.target.value})}>
              <option value="" disabled hidden>
                -------------
              </option>
              {branchPlacement.map((dep) => (
                <option
                  value={dep.Branch}
                  selected={data.department === dep.Branch}
                >
                  {dep.Branch}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div class="flex items-center mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="prn"
            >
              PRN
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, prn: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="prn"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="phoneNumber"
            >
              Phone Number
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="phoneNumber"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="city"
            >
              City
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="city"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="latitude"
            >
              Latitude
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              type="number"
              onChange={(e) => setData({ ...data, latitude: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="latitude"
              step="0.0001"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="longitude"
            >
              Longitude
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              type="number"
              onChange={(e) => setData({ ...data, longitude: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="longitude"
              step="0.0001"
            />
          </div>
        </div>
        <div class="flex items-center mb-6 xl:w-full w-1/2">
          <div class="md:w-1/3">
            <Label
              htmlFor="yearOfGraduation"
            >
              Year of Graduation
            </Label>
          </div>
          <div class="md:w-2/3">
            <input
              value={data.title}
              type="number"
              onChange={(e) => setData({ ...data, yearOfGraduation: e.target.value })}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="yearOfGraduation"
              step="1"
              min={1983}
            />
          </div>
        </div>
        <div class="flex w-full items-center mb-6">
          
         
          <Label
              htmlFor="inline-password"
            >
              Image
            </Label>
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
        <button
          className="flex items-center justify-center w-40 h-12 mt-1  bg-slate-400"
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
                      Full Name
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
                      Profile Image
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {alumni.length > 0 &&
                  alumni.map((element, index) => (
                    <tr
                      key={element._id}
                      class={`${index % 2 == 0 ? "bg-gray-100" : ""} border-b`}
                    >
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index}
                      </td>
                      <td class="text-sm max-w-[600px] text-gray-900 font-light px-6 py-4">
                        {element.firstName}{element.lastName ? ` ${element.lastName}` : ""}
                      </td>
                      <td class="text-sm text-orange-500 font-light px-6 py-4 whitespace-nowrap">
                      {element.department || "-"}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {element.image ? <img src={element.image} alt={element.image} className="h-[100px] w-[100px] object-cover"/> : null}
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

export default Alumni
