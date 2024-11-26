import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
        <div className="card" >
   <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{zindex:'1',left:'80%'}} >
   {source}
  </span>
        <img src={!imageUrl?"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}
