import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import AddBoard from './AddBoard';
import Header from '../Common/Header';

function BoardDetail(props) {
    const BoardId = props.match.params.id;
    const [BoardDetail, setBoardDetail] = useState([]);
    
    useEffect(() => {
        const variable = { boardId : BoardId };
        axios.post(`${props.match.path}`, variable)
            .then(response => {
                console.log(response.data);
                if(response.data.success) {
                    setBoardDetail([response.data.board]);
                    console.log(BoardDetail);
                } else {
                    alert("게시글 가져오기에 실패했습니다.")
                }
            })
    }, []);

    // const onDeleteBoard = (boardFrom, board_id) => {
    //     let variables = {
    //       boardFrom: boardFrom,
    //       _id: board_id,
    //     }
    //     axios.post("/board/deleteBoard", variables)
    //       .then(response => {
    //         console.log("Delete : ", response);
    //         if(response.data.success) {
    //           alert("게시글 삭제에 성공했습니다.");
    //         } else {
    //           alert("게시글 삭제에 실패했습니다.");
    //         }
    //       })
    //   }
    
    return (
        <div>
            <Header title="자유게시판"/>
            { BoardDetail && BoardDetail.map((board, index) => {
              console.log('board',board)
              return(
                  <React.Fragment key={index}>
                    <AddBoard
                      writer={board.boardWriter}
                      title={board.boardTitle}
                      content={board.boardContent}
                    />
                  </React.Fragment>
              )})
            }
        </div>
    )
}

export default withRouter(BoardDetail);