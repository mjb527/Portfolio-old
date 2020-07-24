import React from 'react';
import { Link } from 'react-router-dom';

import './project.css';

function Project(props) {

  const { _id, title, repo, deployment, img_url, description, technologies } = props;

  return(

    <div className="row project-row my-4">

      { /* img from url */}
      <div className="col-md-4 col-sm-12 mb-sm-4 mb-md-0">
        <img src={img_url} alt={title + " example"} className="img-fluid rounded my-sm-4 my-md-0"/>
      </div>

      <div className="col-md-8 col-sm-12">

        <div>

          {/* title */}
          <h4>{ title }</h4>

          { /* repository */}
          <div>Repository: <a href={repo}>{ repo }</a> </div>

          { /* if deployment url */ }
          <p>Deployment: { (deployment) ? <a href={deployment}>{deployment}</a> : "Not Deployable" } </p>

          { /* description */ }
          <p> { description } </p>

          <p>Technologies include { formatTechs(technologies) }.</p>

          <p>{<Link to={"/id/" + _id}>See More Here!</Link>}</p>

        </div>

      </div>

    </div>

  );
}

function formatTechs(technologies) {
    let str = technologies[0]
    for(let i = 1; i < technologies.length - 1; i++)
      str = str + ", " + technologies[i];
    str = str + ", and " + technologies[technologies.length - 1];
    return str;

}

export default Project;
