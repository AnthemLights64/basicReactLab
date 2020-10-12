import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = (probs) => {
  return (
    <div>
      <h2>{`${probs.course} - Modules table`}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{probs.modules[0].name}</td>
            <td>{probs.modules[0].noLectures}</td>
            <td>{probs.modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{probs.modules[1].name}</td>
            <td>{probs.modules[1].noLectures}</td>
            <td>{probs.modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
