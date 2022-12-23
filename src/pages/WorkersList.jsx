import React, {useEffect, useState} from 'react';
import AdminService from "../services/AdminService";
import Header from "../components/Header";

const WorkersList = () => {
  const [workers, setWorkers] = useState(null);

  useEffect(() => {
    fetchAllUsers();
  }, [])

  const fetchAllUsers = () => {
    AdminService.getAllUsers().then((res) => {
      setWorkers(res.data);
      console.log(res.data)
    })
  }
  return (
    <div>
      <Header/>
      <div className="container">

        <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
          </thead>
          <tbody>
          {workers == null ? "" : workers.map((worker) => (
            <tr>
              <td>{worker.username}</td>
              <td>{worker.email}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkersList;