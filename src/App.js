import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination, Table } from "react-bootstrap"; 
import './App.css';

function App() {

  let pageDataLenght;
  let perPage;
  let totalPagination;
  let startIndexTemp;
  let pagesTem;
  let newDataTemp;
  let Data;
  let IndexData;


  let [pagination, setPagination] = useState({
      allData: [],  
      startIndex : 0,
      newData : [],
      perPage: 5,
      pages:[],
      currentPage : 0,


  });

  useEffect(()=>{

    getNewData(pagination.startIndex, pagination.perPage)
    
  },[])

  let getNewData = (startIndex, perPage, pageData, index=0, pointer) => {
    // alert(pagination.newData);
      // alert(startIndex);
      // alert(perPage);
      // alert(pageData);      
      // alert(startIndex);
      // alert(index);
     
       if(pointer == "prev"){
        Data = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
        pageData = Data;
    
         newDataTemp = [];
    
        
        for(let i = (pagination.currentPage-2)*perPage,  j = 0; j<perPage; i++, j++){            
         
          
                 newDataTemp[j] = pageData[i];  
          }  
        
    
            startIndexTemp = startIndex+perPage;
        
            pageDataLenght = pageData && pageData.length? pageData.length: 0;    
            totalPagination = Math.ceil(pageDataLenght/perPage);
            pagesTem = [...Array(totalPagination).keys()];
            let tempPage = pagination.currentPage;
            let currentPageTemp = index+1;
        currentPageTemp = pagination.currentPage === 0?0:pagination.currentPage-1
        setPagination({newData:newDataTemp,pages:pagesTem, allData:Data, startIndex:startIndexTemp, perPage:perPage, index:index, currentPage:currentPageTemp});
       
      }
      else if(pointer == "next"){
        Data = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
        pageData = Data;
    
         newDataTemp = [];
    
        
        for(let i = (pagination.currentPage)*perPage,  j = 0; j<perPage; i++, j++){            
         
          
                 newDataTemp[j] = pageData[i];  
          }  
        
    
            startIndexTemp = startIndex+perPage;
        
            pageDataLenght = pageData && pageData.length? pageData.length: 0;    
            totalPagination = Math.ceil(pageDataLenght/perPage);
            pagesTem = [...Array(totalPagination).keys()];
            let tempPage = pagination.currentPage;
            let currentPageTemp = index+1;
        currentPageTemp = pagination.currentPage === 0?0:pagination.currentPage+1
        setPagination({newData:newDataTemp,pages:pagesTem, allData:Data, startIndex:startIndexTemp, perPage:perPage, index:index, currentPage:currentPageTemp});
       
      }
      else{
        Data = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
        pageData = Data;
    
         newDataTemp = [];
    
        
        for(let i = index*perPage,  j = 0; j<perPage; i++, j++){            
         
          
                 newDataTemp[j] = pageData[i];  
          }  
        
    
            startIndexTemp = startIndex+perPage;
        
            pageDataLenght = pageData && pageData.length? pageData.length: 0;    
            totalPagination = Math.ceil(pageDataLenght/perPage);
            pagesTem = [...Array(totalPagination).keys()];
            let tempPage = pagination.currentPage;
            let currentPageTemp = index+1;
        // currentPageTemp = pagination.currentPage === 0?0:pagination.currentPage
        setPagination({newData:newDataTemp,pages:pagesTem, allData:Data, startIndex:startIndexTemp, perPage:perPage, index:index, currentPage:currentPageTemp});
       
      }
   
     
    }

  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
       {   
        pagination.newData && pagination.newData.length>0 && pagination.newData.map((data, index)=>
            <tr key={index}>              
              <td>{index+1}</td>
              <td>{data}</td>              
            </tr>
           
        )} 
      </tbody>
    </Table>
      
      <Pagination>
        {/* <Pagination.First /> */}
        {pagination.currentPage === 1?'':<Pagination.Prev 
        onClick={(e) => getNewData(pagination.startIndex, pagination.perPage, pagination.allData, 0, "prev")}/>}
        
               {console.log("currentpage "+pagination.currentPage)}
               {console.log("newData "+pagination.newData)}
               {console.log("pages "+pagination.pages)}
               {console.log("perPage "+pagination.perPage)}
             
        {     
          

          pagination.pages && pagination.pages.length>0 && pagination.pages.map((data, index)=>         
          <Pagination.Item key = {index}  
            active = {index === pagination.currentPage-1?"active":''}
            onClick={(e) => getNewData(pagination.startIndex, pagination.perPage, pagination.allData, index)}>
            {data+1}
            </Pagination.Item>
        )}
       
        <Pagination.Ellipsis />   
        {pagination.currentPage === pagination.pages.length?'':      
        <Pagination.Next 
        onClick={(e) => getNewData(pagination.startIndex, pagination.perPage, pagination.allData, 0, "next")}/>
        }
      </Pagination>
    </div>
  );
}

export default App;
