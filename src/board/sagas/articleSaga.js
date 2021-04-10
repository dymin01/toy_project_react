import { articleActions } from "../sagas/articleSlice";
import { call, put } from "redux-saga/effects";
import Axios from "axios";
import history from "../utils/history";
export function* registerArticleAsync(action) {
    const data = action.payload;
    const response = yield Axios.post(`http://localhost:4000/board/`, data);
    alert("저장되었습니다.");
    console.log(response.data.id);
    // history.push(`/article/${response.data.id}`);
    history.push(`/article/${response.data.id}`, response.data.id);
    history.go(0);
}

export function* fetchArticleAsync(action) {
    console.log(action);
    const id = action.payload;
    const response = yield Axios.get(`http://localhost:4000/board/${id}`);
    yield put(articleActions.getArticleAsync(response.data));
}
export function* updateArticleAsync(action) {
    const article = action.payload;
    const response = yield Axios.put(
        `http://localhost:4000/board/${article.id}`,
        article
    );
    alert("수정되었습니다.");
    console.log(response.data.id);
    // history.push(`/article/${response.data.id}`);
    history.push(`/article/${response.data.id}`, response.data.id);
    history.go(0);
}

export function* getArticleAsync(action) {
    const id = action.payload;
    //Axios의 post method로 data 객체를 http://localhost:4000/board url로 요청을 보내주는 것.
    //axios에서는 get으로 객체를 보낼수는 없게 되어있음
    //const postedData = yield Axios.post(`http://localhost:4000/board`,data);
    const response = yield Axios.get(`http://localhost:4000/board/${id}`);
    const request = yield Axios.put(`http://localhost:4000/board/${id}`, {
        ...response.data,
        views: parseInt(response.data.views) + 1,
    });
    //yield alert("저장되었습니다");
    // yield put(articleActions.registerArticleAsync(data));
    //debugger;
    //console.log(response.data);
    // const history = yield getContext("history");
    // yield history.push(`/article/${response.data.id}`);
    //history.push(`/article/${response.data.id}`,response.data.id);
    yield put(articleActions.getArticleAsync(request.data));
}
export function* deleteArticleAsync(action) {
    const id = action.payload;
    yield Axios.delete(`http://localhost:4000/board/${id}`);
    alert("삭제되었습니다.");
    history.push(`/Table`);
    history.go(0); //새로고침
}
