import React, { useState } from 'react'
import {Box, Button, Card, CardContent, Container, Grid, TextField, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function TodoApp() {
   const [text,setText]=useState('')
   const handleChange=(e)=>(
   setText(e.target.value)
   )
   const {todoList}=useSelector((state)=>state.todoReducer)
   // console.log(todoList);
   const dispatch=useDispatch()
  return (
    <>
    <Container>
    <Box sx={{m:5}}>
      <TextField autoComplete='off' value={text} onChange={handleChange} sx={{width:'50%'}} label="Create Todo" />
      <Button onClick={()=>dispatch({type:'add-todo',text:text})} variant='contained' sx={{width:'100px', height:'50px',m:0.4, ml:3}}>Add</Button>
    </Box>
    <Grid container>
      {todoList.map((i,j)=>(
       <Grid  key={j} item >
         <Card sx={{ width:'300px',m:1,textAlign:'left' }} xs={12} sm={4} md={4} lg={6} >
        <CardContent>
          <Typography variant="h6">
            {(i.todo).toUpperCase()}
          </Typography>
          <Button  onClick={()=>dispatch({type:'delete',id:i.id})} variant='contained' color='error' sx={{p:0.6,mt:1,fontSize:'10px'}}>
             Delete
          </Button> 
          {/* <Typography variant="body2"  color="#b3b2b1" sx={{mt:1.4}}>
           Created in : {i.date} {i.time}
          </Typography> */}
          
        </CardContent>
      </Card>
       </Grid>
       ))}
       
    </Grid>
   
    </Container>

    </>
  )
}

export default TodoApp