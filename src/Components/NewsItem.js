import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return <div className='my-3'>
      <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className={`badge rounded-pill bg-${this.props.bagdeColor}`}>{source}
          </span>
        </div>
        <img src={imageUrl ? imageUrl : "https://tse4.mm.bing.net/th?id=OIP.J3pvzBaxDXqEpiBeuGRH9wHaEK&pid=Api&P=0&w=310&h=174"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className={`text-${this.props.bagdeColor}`}>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
        </div>
      </div>
    </div>;
  }
}

export default NewsItem;
