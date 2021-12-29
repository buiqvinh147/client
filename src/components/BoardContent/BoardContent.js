import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import './BoardContent.scss'
import Column from '../../components/Column/Column'
import { mapOrder } from '../../utilities/sorts'
import { initialData } from '../../actions/initialData.js';



function BoardContent () {
    const [board, setBoard] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
       const boardFromDB = initialData.boardss.find(board => board.id === 'board-1')
       if (boardFromDB) {
           setBoard(boardFromDB)


    
           setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
       }
    }, [])
    
    if (isEmpty(board)) {
        return <div className='not-found'>Board not found</div>
    }

    return (
        <div className="board-content">
            {columns.map((column, index) => <Column key={index} column={column}/>)}
            
        
        </div>
    )
}
export default BoardContent