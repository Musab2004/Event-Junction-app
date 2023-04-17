import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";
// var comment=[{
//   eventid:"2",
//   id: "2",
//   body: "Second comment Event 2",
//   username: "John",
//   userId: "2",
//   parentId: null,
//   createdAt: "2021-08-16T23:00:33.010+02:00",
// }]
const Comments = (props) => {
  console.log(props)
  let eventid=props.eventdetails.id
  let myFile=props.userdetails.myFile
  let currentUserId=props.userdetails.name
  let expirydate=props.eventdetails.expiresAt.toString()
  console.log(eventid)
  console.log(currentUserId)
  const getallcomments = async () => {
    const res = await fetch("/allcomment",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
     
      })
      
   
      });
      const data= await res.json();
      setBackendComments(data)
      // console.log(backendComments)
    }
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) =>  backendComment.parentId==null && backendComment.eventid==eventid 
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = async (text, parentId) => {
    setActiveComment(null);
    if(parentId){
      
    }
    else{
      parentId=null
      console.log(parentId)
    }
    
    const date = new Date();
    // const eventid=;
    // const{name,email,password}=user;
    const username=currentUserId
    let id="1"
  //   for (let i=0;i<backendComments.length;i++){
  //   console.log(backendComments.length)
  //   if(backendComments[i].id==id){
  //     console.log("found")
  //     id=id+1
  //   }
  //   else{
  //     console.log("not found")
  //     break;
  //   }
  // }
    // let id=Math.max(...backendComments)
    
    const res = await fetch("/Postcomment",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      eventid,
      id,
      text,
      username,
      parentId,
      date,
      myFile,
      expirydate
    })
    
    
    });
    const data= await res.json();
    console.log(data)
      
   





    } 
  


  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment._id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

 
  useEffect(() => {
  

   getallcomments()

    // getCommentsApi().then((data) => {
    //   setBackendComments(data);
    // });
  });

  return (
    <div className="comments">
      <b className="comments-title">Disscusion Forum</b>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment}  />
      <div className="comments-container">
        {rootComments && rootComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            img={myFile}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;