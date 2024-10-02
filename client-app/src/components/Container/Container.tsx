import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../inteface/UrlData";
import axios from "axios";
import { serverUrl } from "../../helpers/Constant";
import DataTable from "../DataTable/DataTable";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data,setData]=React.useState<UrlData[]>([])
  const [reload,setReload]=React.useState<boolean>(false)
  const updateReloadState=():void=>{
    setReload(true)

  }



  const fetchTableData=async()=>{
    try {
      const response=await axios.get(`${serverUrl}/shortUrl`)
      console.log("THe response from server is:",response);
      setData(response.data)
      setReload(false)
      
    } catch (error) {
      
      console.error("Error:", error);
    }
  
  }
  React.useEffect(()=>{
    fetchTableData()
  },[reload])
  return (
    <>
      
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data}/>
    </>
  );
};

export default Container;
