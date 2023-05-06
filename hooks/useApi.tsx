import axios from "axios";
import { useEffect, useState } from "react"

const useApi = ({ url, request }: { url: string, request: 'POST' | 'GET'}) => {
  const [loading, setLoading] = useState(true)
  const [dataFetched, setDataFetched] = useState(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const fetchApi = async () => {

    try {
      let response: any;

      if (data) {
        response = await axios(`${url}`, {
          method: request,
          data
        })
      }

      if (!data) {
        response = await axios(`${url}`, {
          method: request,
        })
      }

      setDataFetched(response.data)
      setLoading(false)

    } catch (err: any) {
      setError(err.response)
      setLoading(false)
    }

  };

  const setDataApi = (value:any) => {
    setData(value)
  }

  return { setDataApi, fetchApi, loading, dataFetched, error }
};

export default useApi;