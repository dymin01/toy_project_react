import { takeEvery, takeLatest, take } from "redux-saga/effects"; 
import { articleActions} from "./articleSlice"; 
import { boardActions } from "./boardSlice";
import { registerArticleAsync, getArticleAsync, fetchArticleAsync, updateArticleAsync, deleteArticleAsync } from "./articleSaga"; 
import { getBoardAsync } from "./boardSaga";
import { registerCommentAsync,getCommentsAsync, deleteCommentAsync } from "./commentSaga";
import { commentActions } from "./commentSlice";

const { registerArticle, getArticle, fetchArticle, updateArticle, deleteArticle } = articleActions; 
const { getBoard } = boardActions; 
const { registerComment, getComments, deleteComment} = commentActions;

export default function* rootWatcher() { 
    yield takeLatest(registerArticle.type, registerArticleAsync); 
    yield takeEvery(getArticle.type,getArticleAsync);
    yield takeEvery(getBoard.type,getBoardAsync);
    yield takeEvery(fetchArticle.type, fetchArticleAsync);
    yield takeLatest(updateArticle.type,updateArticleAsync);
    yield takeLatest(deleteArticle.type, deleteArticleAsync);
    yield takeLatest(registerComment.type,registerCommentAsync);
    yield takeEvery(getComments.type,getCommentsAsync);
    yield takeLatest(deleteComment.type, deleteCommentAsync);

}
