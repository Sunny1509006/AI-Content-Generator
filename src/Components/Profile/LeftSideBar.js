import React from "react";
import { MdDashboard, MdArticle, MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscSymbolKeyword } from "react-icons/vsc";

export const LeftSideBar = () => {
  return (
    <div
      style={{
        width: "25%",
        borderRight: "1px solid #FF4A17",
        display: "flex",
        flexDirection: "column",
        gap: '20px',
        marginLeft: '-80px'
      }}
    >
    <Link to="/dashboard" style={{textDecoration: 'none', color: '#FF4A17'}}>
      <div style={{display: 'flex', gap: '10px', }}>
        <MdDashboard size={30}/>
        <h3>DashBoard</h3>
      </div>
      </Link>
      <Link to="/post-history" style={{textDecoration: 'none', color: 'black'}}>
      <div style={{display: 'flex', gap: '10px', }}>
        <MdHistory size={30}/>
        <h3>Post History</h3>
      </div>
      </Link>
      <Link to="/info-article" style={{textDecoration: 'none', color: 'black'}}>
      <div style={{display: 'flex', gap: '10px', }}>
        <MdArticle size={30}/>
        <h3>Create Article</h3>
      </div>
      </Link>
      <Link to="/keyword-generator" style={{textDecoration: 'none', color: 'black'}}>
      <div style={{display: 'flex', gap: '10px', }}>
        <VscSymbolKeyword size={30}/>
        <h3>Keywords Generate (Free)</h3>
      </div>
      </Link>
    </div>
  );
};
