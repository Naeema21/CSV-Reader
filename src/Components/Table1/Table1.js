import React, { useEffect, useState } from 'react'
import { csv } from 'd3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "react-js-pagination";

const Table1 = () => {
    const [Data, setData] = useState([]);
    const [activePage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const indexOfLastrow = activePage * rowsPerPage;
    const indexOfFirstrow = indexOfLastrow - rowsPerPage;
    const currentrow = Data.slice(indexOfFirstrow, indexOfLastrow);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
    const fetechData = () => {
        csv('data.csv').then(data => {
            console.log(data);
            setData(data);
        })
    }
    useEffect(() => {
        fetechData();
    }, [])

    return (
        <div className="Table1 shadow p-3 mb-5 bg-white rounded bg-light">
            <h6>Read CSV file data</h6>
            <br></br>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">PhoneNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentrow.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phoneNumber}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="pagination-block d-flex justify-content-end  px-4 align-items-center">
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={rowsPerPage}
                    totalItemsCount={Data.length}
                    onChange={handlePageChange}
                />
        </div>
        </div>
    );
}
export default Table1;
