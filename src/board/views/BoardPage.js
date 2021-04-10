import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import BoardList from "./BoardList";
import { Button, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "../sagas/boardSlice";
import { articleActions } from "../sagas/articleSlice";
import { createSelector } from "@reduxjs/toolkit";

import { Container, Row, Col } from "reactstrap";

const { Title } = Typography;
function BoardPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(boardActions.getBoard());
    }, [dispatch]);

    const { board, isLoading, isSuccess, error } = useSelector((state) => ({
        board: state.boardReducers.board,
        isLoading: state.boardReducers.isLoading,
        isSuccess: state.boardReducers.isSuccess,
        error: state.boardReducers.error,
    }));

    const createCommentLength = createSelector(
        (state) => state.boardReducers.board,
        (state) => state.commentReducers.comments,
        (articles, comments) => {
            const commentByArticle = {};
            for (var index in articles) {
                if (!comments) return commentByArticle;

                const filteredComments = comments.filter(
                    (comment) => comment.articleId === articles[index].id
                );
                commentByArticle[articles[index].id] = filteredComments.length;
            }
            return commentByArticle;
        }
    );

    const commentLength = useSelector(createCommentLength);

    const onDeleteClick = (id) => {
        if (!window.confirm("삭제하시겠습니까?")) return false;
        dispatch(articleActions.deleteArticle(id));
    };

    const onArticleTitleClick = (id) => {
        const path = `/article/${id}`;
        history.push(path);
    };

    return (
        <div>
            <div style={{ width: "80%", margin: "3rem auto" }}>
                <div>
                    <Link to="/register?isForEdit=false">
                        <Button type="primary">New Post</Button>
                    </Link>
                </div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <Title>게시판</Title>
                </div>

                <div className="title"></div>
                <div className="search">
                    <form>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search something..."
                        />
                        <button type="submit">
                            <i>search</i>
                        </button>
                    </form>
                    <div className="open-button"></div>
                </div>
                <div className="overlay hidden"></div>

                <div>
                    {error ? (
                        <h2>에러 발생: {error}</h2>
                    ) : isSuccess && board.length > 0 ? (
                        <BoardList
                            board={board}
                            commentLength={commentLength}
                            handleDeleteClick={onDeleteClick}
                            handleArticleTitleClick={onArticleTitleClick}
                        />
                    ) : isSuccess && board.length <= 0 ? (
                        <p> 조회할 내용이 없습니다. </p>
                    ) : (
                        <p> 목록을 불러오는 중입니다. </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BoardPage;
