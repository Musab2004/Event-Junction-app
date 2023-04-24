// import CommentForm from "./CommentForm";
// import avatar from '../download.png'
// const Comment = ({
//   comment,
//   replies,
//   setActiveComment,
//   activeComment,
//   updateComment,
//   deleteComment,
//   addComment,
//   parentId = null,
//   img,
//   currentUserId,
// }) => {
//   const isEditing =
//     activeComment &&
//     activeComment.id === comment.id &&
//     activeComment.type === "editing";
//   const isReplying =
//     activeComment &&
//     activeComment.id === comment.id &&
//     activeComment.type === "replying";
//     // console.log(activeComment.id,comment.id)
//   const fiveMinutes = 300000;
//   const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
//   const canDelete =
//     currentUserId === comment.userId && replies.length === 0 && !timePassed;
//   const canReply = true;
//   const canEdit = currentUserId === comment.userId && !timePassed;
//   const replyId = parentId ? parentId : comment.id;
//   const createdAt = new Date(comment.createdAt).toLocaleDateString();
//   return (
//     <div key={comment.id} className="comment">
//       <div className="comment-image-container">
//         <img src={comment.myFile||avatar} 
//          class="rounded-circle"
//          height="40"
//          alt="Black and White Portrait of a Man"
//          loading="lazy"/>
//       </div>
//       <div className="comment-right-part">
//         <div className="comment-content">
//           <div className="comment-author">{comment.username}</div>
//           <div>{createdAt}</div>
//         </div>
//         {!isEditing && <div className="comment-text">{comment.text}</div>}
//         {isEditing && (
//           <CommentForm
//             submitLabel="Update"
//             hasCancelButton
//             initialText={comment.text}
//             handleSubmit={(text) => updateComment(text, comment.id)}
//             handleCancel={() => {
//               setActiveComment(null);
//             }}
//           />
//         )}
//         <div className="comment-actions" style={{left:"50px"}}>
//           {canReply && (
//             <div
//               className="comment-action"
//               onClick={() =>
//                 setActiveComment({ id: comment.id, type: "replying" })
//               }
//             >
//               Reply
//             </div>
//           )}
//           {canEdit && (
//             <div
//               className="comment-action"
//               onClick={() =>
//                 setActiveComment({ id: comment.id, type: "editing" })
//               }
//             >
//               Edit
//             </div>
//           )}
//           {canDelete && (
//             <div
//               className="comment-action"
//               onClick={() => deleteComment(comment.id)}
//             >
//               Delete
//             </div>
//           )}
//         </div>
//         {isReplying && (
//           <CommentForm
//             submitLabel="Reply"
//             handleSubmit={(text) => addComment(text, replyId)}
//           />
//         )}
//         {replies.length > 0 && (
//           <div className="replies">
//             {replies.map((reply) => (
//               <Comment
//                 comment={reply}
//                 key={reply.id}
//                 setActiveComment={setActiveComment}
//                 activeComment={activeComment}
//                 updateComment={updateComment}
//                 deleteComment={deleteComment}
//                 addComment={addComment}
//                 parentId={comment.id}
//                 replies={[]}
//                 currentUserId={currentUserId}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Comment;



import CommentForm from "./CommentForm";
import avatar from '../download.png'
const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
  name,
}) => {
  console.log(currentUserId,comment.username)
  const isEditing =
    activeComment &&
    activeComment._id === comment._id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment._id === comment._id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.username;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment._id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
      <img src={comment.myFile||avatar} 
         class="rounded-circle"
         height="40"
         alt="Black and White Portrait of a Man"
         loading="lazy"/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.name}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.text}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment._id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ _id: comment._id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ _id: comment._id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;