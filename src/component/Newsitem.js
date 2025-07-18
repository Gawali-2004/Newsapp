import React, { Component } from "react";
import { motion } from "framer-motion";
import defaultImage from "./defaultImage.png"; // Ensure the path is correct

export class Newsitem extends Component {
  handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <motion.div
        className="card h-100 shadow-sm rounded-lg overflow-hidden"
        style={{ height: "500px" }}
        whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="position-relative">
          <motion.img
            src={imageUrl ? imageUrl : defaultImage}
            onError={this.handleImageError}
            className="card-img-top"
            alt={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <span className="position-absolute top-0 end-0 m-2 badge bg-danger">
            {source}
          </span>
        </div>
        <div className="card-body d-flex flex-column p-4">
          <h5 className="card-title text-dark mb-3">{title}</h5>
          <p className="card-text text-secondary flex-grow-1">{description}</p>
          <small className="text-muted mb-3">
            By {author ? author : "Unknown"} | {new Date(date).toGMTString()}
          </small>
          <motion.a
            href={newsUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-outline-dark w-100 mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Read More
          </motion.a>
        </div>
      </motion.div>
    );
  }
}

export default Newsitem;
